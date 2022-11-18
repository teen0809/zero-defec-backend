"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRefreshTokenModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_refresh_token_service_1 = require("./admin-refresh-token.service");
const admin_refresh_token_entity_1 = require("./admin-refresh-token.entity");
const admin_refresh_token_repository_1 = require("./admin-refresh-token.repository");
let AdminRefreshTokenModule = class AdminRefreshTokenModule {
};
AdminRefreshTokenModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([admin_refresh_token_entity_1.AdminRefreshToken])],
        providers: [admin_refresh_token_service_1.AdminRefreshTokenService, admin_refresh_token_repository_1.AdminRefreshTokenRepository],
        exports: [admin_refresh_token_service_1.AdminRefreshTokenService],
    })
], AdminRefreshTokenModule);
exports.AdminRefreshTokenModule = AdminRefreshTokenModule;
//# sourceMappingURL=auth-refresh-token.shema.js.map