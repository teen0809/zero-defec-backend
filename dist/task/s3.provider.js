"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Provider = void 0;
const aws_sdk_1 = require("aws-sdk");
const config_1 = require("@nestjs/config");
const task_types_1 = require("./task.types");
exports.S3Provider = {
    provide: task_types_1.S3_PROVIDER_TOKEN,
    useFactory: async (configService) => {
        return new aws_sdk_1.S3({
            accessKeyId: configService.get('s3Config.awsId'),
            secretAccessKey: configService.get('s3Config.awsSecret'),
        });
    },
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=s3.provider.js.map