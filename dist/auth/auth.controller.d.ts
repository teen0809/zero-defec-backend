import { Request as RequestForCookie } from 'express';
import { AuthService } from '../auth/auth.service';
import RefreshTokensDto from './dto/refresh-tokens.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<import("./dto/tokens-response.dto").TokensResponseDto>;
    success(req: any): Promise<any>;
    logout(req: RequestForCookie): Promise<void>;
    refreshTokens(params: RefreshTokensDto, res: Response): Promise<any>;
}
