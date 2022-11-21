import { ConfigService } from '@nestjs/config';
import { LoginResponseDto } from '../dto/login-response.dto';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: LoginResponseDto): Promise<LoginResponseDto>;
}
export {};
