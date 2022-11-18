import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { UserRefreshToken } from './auth-refresh-token.schema';
export declare class AuthRefreshTokenService {
    private readonly userRefreshTokenModel;
    private readonly configService;
    constructor(userRefreshTokenModel: Model<UserRefreshToken>, configService: ConfigService);
    create(userId: string): Promise<string>;
    deleteByToken(token: string): Promise<boolean>;
    findOneBy(params: Partial<UserRefreshToken>): Promise<UserRefreshToken>;
}
