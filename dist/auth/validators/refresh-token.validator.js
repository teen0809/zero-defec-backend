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
exports.RefreshTokenValidator = void 0;
const luxon_1 = require("luxon");
const auth_refresh_token_service_1 = require("../../auth-refresh-token/auth-refresh-token.service");
const class_validator_1 = require("class-validator");
let RefreshTokenValidator = class RefreshTokenValidator {
    constructor(authRefreshTokenService) {
        this.authRefreshTokenService = authRefreshTokenService;
    }
    async validate(token, args) {
        const refreshToken = await this.authRefreshTokenService.findOneBy({ token });
        return refreshToken && luxon_1.DateTime.fromJSDate(refreshToken.expireAt) > luxon_1.DateTime.now();
    }
    defaultMessage() {
        return `Refresh token not found or expired`;
    }
};
RefreshTokenValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'refreshTokenValidator', async: true }),
    __metadata("design:paramtypes", [auth_refresh_token_service_1.AuthRefreshTokenService])
], RefreshTokenValidator);
exports.RefreshTokenValidator = RefreshTokenValidator;
//# sourceMappingURL=refresh-token.validator.js.map