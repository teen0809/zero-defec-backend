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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const api_response_helper_1 = require("../common/helpers/api-response.helper");
const login_response_dto_1 = require("./dto/login-response.dto");
const user_schema_1 = require("../user/user.schema");
const refresh_tokens_dto_1 = require("./dto/refresh-tokens.dto");
const config_1 = require("@nestjs/config");
let AuthController = class AuthController {
    constructor(authService, configService) {
        this.authService = authService;
        this.configService = configService;
    }
    async login(req, res) {
        const authData = await this.authService.login(req.user);
        res.cookie('refreshToken', authData.refreshToken, {
            httpOnly: this.configService.get('jwtConfig.refreshTokenCookieHttpOnly'),
            secure: this.configService.get('jwtConfig.refreshTokenCookieSecure'),
            maxAge: this.configService.get('jwtConfig.refreshTokenDurationDays') * 1000 * 60 * 60 * 24,
            domain: this.configService.get('jwtConfig.refreshTokenCookieDomain'),
        });
        return { accessToken: authData.accessToken, role: req.user.permission };
    }
    async success(req) {
        return req.user;
    }
    async logout(req) {
        const { refreshToken } = req.cookies || {};
    }
    async refreshTokens(params, res) {
        const authData = await this.authService.refreshTokens(params);
        res.cookie('refreshToken', authData.refreshToken, {
            httpOnly: this.configService.get('jwtConfig.refreshTokenCookieHttpOnly'),
            secure: this.configService.get('jwtConfig.refreshTokenCookieSecure'),
            maxAge: this.configService.get('jwtConfig.refreshTokenDurationDays') * 1000 * 60 * 60 * 24,
            domain: this.configService.get('jwtConfig.refreshTokenCookieDomain'),
        });
        return { accessToken: authData.accessToken };
    }
};
__decorate([
    (0, swagger_1.ApiResponse)(api_response_helper_1.ApiResponseHelper.success(login_response_dto_1.LoginResponseDto)),
    (0, swagger_1.ApiResponse)(api_response_helper_1.ApiResponseHelper.validationError('Validation failed')),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(api_response_helper_1.ApiResponseHelper.success(user_schema_1.User)),
    (0, swagger_1.ApiResponse)(api_response_helper_1.ApiResponseHelper.unauthorized()),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "success", null);
__decorate([
    (0, swagger_1.ApiResponse)(api_response_helper_1.ApiResponseHelper.successWithExample({}, common_1.HttpStatus.OK)),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('refresh-tokens'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_tokens_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, config_1.ConfigService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map