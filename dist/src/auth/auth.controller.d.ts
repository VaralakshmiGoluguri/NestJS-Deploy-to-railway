import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { userLoginDTO } from 'src/users/dto/user-login.dto';
import { Enable2FAType } from './types/payload.types';
import { UpdateResult } from 'typeorm';
import { ValidateTokenDTO } from './dto/validate-token.dto';
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UsersService, authService: AuthService);
    signup(userDTO: CreateUserDTO): Promise<User>;
    login(loginDTO: userLoginDTO): Promise<{
        accessToken: string;
    } | {
        validate2FA: string;
        message: string;
    }>;
    enable2FA(req: any): Promise<Enable2FAType>;
    disable2FA(req: any): Promise<UpdateResult>;
    validate2FA(req: any, ValidateTokenDTO: ValidateTokenDTO): Promise<{
        verified: boolean;
    }>;
    getProfile(req: any): {
        msg: string;
        user: any;
    };
    testEnv(): number;
}
