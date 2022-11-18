import { AuthRefreshTokenService } from '@src/auth-refresh-token/auth-refresh-token.service';
import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class RefreshTokenValidator implements ValidatorConstraintInterface {
    private readonly authRefreshTokenService;
    constructor(authRefreshTokenService: AuthRefreshTokenService);
    validate(token: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(): string;
}
