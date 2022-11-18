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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const refresh_token_validator_1 = require("../validators/refresh-token.validator");
class RefreshTokensDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'F?2BVjaxNR-&hn%', required: true, minLength: 64, maxLength: 64 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(64),
    (0, class_validator_1.MaxLength)(64),
    (0, class_validator_1.Validate)(refresh_token_validator_1.RefreshTokenValidator),
    __metadata("design:type", String)
], RefreshTokensDto.prototype, "refreshToken", void 0);
exports.default = RefreshTokensDto;
//# sourceMappingURL=refresh-tokens.dto.js.map