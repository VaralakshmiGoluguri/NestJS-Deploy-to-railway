import { ConfigService } from '@nestjs/config';
export declare class AppService {
    private configService;
    constructor(configService: ConfigService);
    getHello(): string;
    getEnvVariables(): {
        port: number;
    };
}
