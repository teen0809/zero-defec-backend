"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('s3Config', () => ({
    s3Bucket: process.env.S3_BUCKET,
    awsId: process.env.AWS_ID,
    awsSecret: process.env.AWS_SECRET,
}));
//# sourceMappingURL=s3.config.js.map