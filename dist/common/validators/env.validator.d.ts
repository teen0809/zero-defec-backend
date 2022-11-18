export declare enum Environment {
    Development = "development",
    Production = "production",
    Test = "test"
}
declare class EnvironmentVariables {
    NODE_ENV: Environment;
    MONGO_URI: string;
    JWT_SECRET: string;
    JWT_REFRESH_TOKEN_COOKIE_DOMAIN: string;
    JWT_REFRESH_TOKEN_DURATION_DAYS: string;
    JWT_REFRESH_TOKEN_MAX_SESSIONS: string;
    JWT_ACCESS_TOKEN_DURATION_MINUTES: string;
    JWT_REFRESH_TOKEN_COOKIE_SECURE: 'true' | 'false';
    JWT_REFRESH_TOKEN_COOKIE_HTTPONLY: 'true' | 'false';
    S3_BUCKET: any;
    AWS_ID: any;
    AWS_SECRET: any;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
