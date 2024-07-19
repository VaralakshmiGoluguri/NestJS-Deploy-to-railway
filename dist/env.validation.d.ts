declare class EnvironmentVariables {
    NODE_ENV: string;
    PORT: number;
    DB_HOST: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    SECRET: string;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
