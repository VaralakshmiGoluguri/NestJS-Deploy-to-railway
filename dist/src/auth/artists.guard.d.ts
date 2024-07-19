import { ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PayloadType } from './types/payload.types';
declare const JwtArtistGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtArtistGuard extends JwtArtistGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    handleRequest<TUser = PayloadType>(err: any, user: any): TUser;
}
export {};
