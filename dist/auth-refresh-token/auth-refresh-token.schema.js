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
exports.UserRefreshTokenSchema = exports.UserRefreshToken = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../user/user.schema");
const mongoose_2 = require("mongoose");
let UserRefreshToken = class UserRefreshToken {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], UserRefreshToken.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserRefreshToken.prototype, "token", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], UserRefreshToken.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Date)
], UserRefreshToken.prototype, "expireAt", void 0);
UserRefreshToken = __decorate([
    (0, mongoose_1.Schema)()
], UserRefreshToken);
exports.UserRefreshToken = UserRefreshToken;
exports.UserRefreshTokenSchema = mongoose_1.SchemaFactory.createForClass(UserRefreshToken);
//# sourceMappingURL=auth-refresh-token.schema.js.map