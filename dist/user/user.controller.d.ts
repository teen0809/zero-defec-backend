import { UserService } from './user.service';
import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userSevice;
    constructor(userSevice: UserService);
    register(body: CreateUserDto): Promise<User>;
}
