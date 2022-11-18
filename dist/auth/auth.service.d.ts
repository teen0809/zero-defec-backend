import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '@sentry/types';
import { AuthRefreshTokenService } from '@src/auth-refresh-token/auth-refresh-token.service';
import { TokensResponseDto } from './dto/tokens-response.dto';
import RefreshTokensDto from './dto/refresh-tokens.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly authRefreshTokenService;
    constructor(userService: UserService, jwtService: JwtService, authRefreshTokenService: AuthRefreshTokenService);
    login(user: Partial<User>): Promise<TokensResponseDto>;
    validateUser(email: string, password: string): Promise<Partial<any> | null>;
    private createRefreshToken;
    logout(refreshToken: string): Promise<void>;
    refreshTokens(params: RefreshTokensDto): Promise<TokensResponseDto>;
}
