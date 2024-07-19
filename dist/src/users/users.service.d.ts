import { userLoginDTO } from './dto/user-login.dto';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { Repository, UpdateResult } from 'typeorm';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(userDTO: CreateUserDTO): Promise<User>;
    findOne(data: userLoginDTO): Promise<User>;
    updateSecretKey(userId: any, secret: string): Promise<UpdateResult>;
    findById(id: number): Promise<User>;
    disable2FA(userId: number): Promise<UpdateResult>;
    findByApiKey(apiKey: string): Promise<User>;
}
