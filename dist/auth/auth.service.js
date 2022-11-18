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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const auth_refresh_token_service_1 = require("../auth-refresh-token/auth-refresh-token.service");
let AuthService = class AuthService {
    constructor(userService, jwtService, authRefreshTokenService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.authRefreshTokenService = authRefreshTokenService;
    }
    async login(user) {
        const payload = { id: user.id, name: user.name, email: user.email };
        const accessToken = this.jwtService.sign(payload);
        const refreshToken = await this.createRefreshToken(user.id);
        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
        };
    }
    async validateUser(email, password) {
        const user = await this.userService.findByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            return { id: user._id, name: user.name, email: user.email };
        }
        return null;
    }
    async createRefreshToken(userId) {
        return this.authRefreshTokenService.create(userId);
    }
    async logout(refreshToken) {
        await this.authRefreshTokenService.deleteByToken(refreshToken);
    }
    async refreshTokens(params) {
        const oldRefreshToken = await this.authRefreshTokenService.findOneBy({ token: params.refreshToken });
        if (!oldRefreshToken) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        if (oldRefreshToken.expireAt.getTime() < new Date().getTime()) {
            throw new common_1.UnauthorizedException('Refresh token is expired');
        }
        await this.authRefreshTokenService.deleteByToken(params.refreshToken);
        const user = await this.userService.findOneById(oldRefreshToken.user.toString());
        const accessToken = this.jwtService.sign({
            id: user._id,
            name: user.name,
            email: user.email,
        });
        const refreshToken = await this.createRefreshToken(user.id);
        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        auth_refresh_token_service_1.AuthRefreshTokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map