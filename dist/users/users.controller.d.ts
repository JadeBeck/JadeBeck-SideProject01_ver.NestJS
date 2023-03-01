import { CreateUsersDto, UpdateUsersDto } from "./dto";
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(createUsersDto: CreateUsersDto): Promise<void>;
    findAll(): Promise<User[]>;
    findOne(params: any): Promise<any[]>;
    update(id: string, updateuserDto: UpdateUsersDto): string;
    remove(id: string): string;
}
