import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(body: CreateUserDto): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByEmailAndPermission(email: string, permission: number): Promise<User>;
    findOneById(id: string): Promise<any>;
}
