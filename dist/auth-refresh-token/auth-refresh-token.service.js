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
exports.AuthRefreshTokenService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const mongoose_2 = require("mongoose");
const node_crypto_1 = require("node:crypto");
const luxon_1 = require("luxon");
const auth_refresh_token_schema_1 = require("./auth-refresh-token.schema");
let AuthRefreshTokenService = class AuthRefreshTokenService {
    constructor(userRefreshTokenModel, configService) {
        this.userRefreshTokenModel = userRefreshTokenModel;
        this.configService = configService;
    }
    async create(userId) {
        const refreshToken = new this.userRefreshTokenModel({
            user: userId,
            token: (0, node_crypto_1.randomBytes)(32).toString('hex'),
            expireAt: luxon_1.DateTime.now()
                .plus({ days: this.configService.get('jwtConfig.refreshTokenDurationDays') })
                .toJSDate(),
        });
        return (await refreshToken.save()).token;
    }
    async deleteByToken(token) {
        const deleteResult = await this.userRefreshTokenModel.deleteOne({ token }).exec();
        return deleteResult.acknowledged;
    }
    async findOneBy(params) {
        return this.userRefreshTokenModel.findOne(Object.assign({}, params));
    }
};
AuthRefreshTokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(auth_refresh_token_schema_1.UserRefreshToken.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService])
], AuthRefreshTokenService);
exports.AuthRefreshTokenService = AuthRefreshTokenService;
//# sourceMappingURL=auth-refresh-token.service.js.map