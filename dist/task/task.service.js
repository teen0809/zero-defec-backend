"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const uuid_1 = require("uuid");
const config_1 = require("@nestjs/config");
const mongoose_2 = require("mongoose");
const task_schema_1 = require("./task.schema");
const task_types_1 = require("./task.types");
let TaskService = class TaskService {
    constructor(s3, taskModel, configService) {
        this.s3 = s3;
        this.taskModel = taskModel;
        this.configService = configService;
    }
    async create(file, body, user_id) {
        const { url } = await this.uploadPublicFile(file.buffer, file.filename);
        const task = new this.taskModel(Object.assign(Object.assign({}, body), { imageUrl: url, user_id }));
        return task.save();
    }
    async findById(id) {
        const task = this.taskModel.findOne({ id }).exec();
        return task;
    }
    async getLimitedItems(limit, pageNumber) {
        const tasks = this.taskModel
            .find()
            .limit(limit)
            .skip(pageNumber * limit)
            .exec();
        return tasks;
    }
    async update(_id, updateTaskDto) {
        const updates = {
            title: updateTaskDto.title,
            description: updateTaskDto.description,
        };
        await this.taskModel.findByIdAndUpdate(_id, updates).exec();
        const task = await this.taskModel.findOne({ id: _id });
        return task;
    }
    async delete(id) {
        const result = await this.taskModel.deleteOne({ id }).exec();
        return result.acknowledged;
    }
    async uploadPublicFile(dataBuffer, filename) {
        try {
            const uploadResult = await this.s3
                .upload({
                Bucket: this.configService.get('s3Config.s3Bucket'),
                Body: dataBuffer,
                Key: `${(0, uuid_1.v4)()}-${filename}`,
            })
                .promise();
            return {
                key: uploadResult.Key,
                url: uploadResult.Location,
            };
        }
        catch (err) {
            throw err;
        }
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(task_types_1.S3_PROVIDER_TOKEN)),
    __param(1, (0, mongoose_1.InjectModel)(task_schema_1.Task.name)),
    __metadata("design:paramtypes", [Object, mongoose_2.Model,
        config_1.ConfigService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map