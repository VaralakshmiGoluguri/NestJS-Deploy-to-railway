import { Strategy } from 'passport-jwt';
import { PayloadType } from './types/payload.types';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: PayloadType): Promise<{
        userId: number;
        email: string;
        artistId: number;
    }>;
}
export {};
