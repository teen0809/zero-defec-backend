import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
export declare const S3Provider: {
    provide: string;
    useFactory: (configService: ConfigService) => Promise<S3>;
    inject: (typeof ConfigService)[];
};
