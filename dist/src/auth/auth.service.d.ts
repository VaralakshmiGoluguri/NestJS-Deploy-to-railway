import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { userLoginDTO } from 'src/users/dto/user-login.dto';
import { User } from 'src/users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ArtistsService } from 'src/artists/artist.service';
import { Enable2FAType } from './types/payload.types';
import { UpdateResult } from 'typeorm';
export declare class AuthService {
    private usersService;
    private JwtService;
    private artistService;
    private configService;
    constructor(usersService: UsersService, JwtService: JwtService, artistService: ArtistsService, configService: ConfigService);
    login(loginDTO: userLoginDTO): Promise<{
        accessToken: string;
    } | {
        validate2FA: string;
        message: string;
    }>;
    enable2FA(userId: number): Promise<Enable2FAType>;
    disable2FA(userId: number): Promise<UpdateResult>;
    validate2FAToken(userId: number, token: string): Promise<{
        verified: boolean;
    }>;
    validateUserByApiKey(apiKey: string): Promise<User>;
    getEnvVariable(): number;
}
