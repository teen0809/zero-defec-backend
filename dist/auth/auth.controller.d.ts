import { Request as RequestForCookie, Response } from 'express';
import { AuthService } from '../auth/auth.service';
import RefreshTokensDto from './dto/refresh-tokens.dto';
import { ConfigService } from '@nestjs/config';
export declare class AuthController {
    private readonly authService;
    private readonly configService;
    constructor(authService: AuthService, configService: ConfigService);
    login(req: any, res: Response): Promise<{
        accessToken: string;
        role: any;
    }>;
    success(req: any): Promise<any>;
    logout(req: RequestForCookie): Promise<void>;
    refreshTokens(params: RefreshTokensDto, res: Response): Promise<any>;
}
