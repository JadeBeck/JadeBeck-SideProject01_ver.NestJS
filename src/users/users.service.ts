import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {getConnection, Repository} from "typeorm";
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    async create(user: User): Promise<void> { //리턴타입 보이드. async 붙여서 해당 절차 처리 후 리턴되게 함.
        await this.usersRepository.save(user);
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async update(id: number, user: User): Promise<void> {
        const existCat = await this.usersRepository.findOne(id);
        if(existCat){
            await getConnection()
                .createQueryBuilder()
                .update(User)
                .set({
                    name: user.name,
                    email: user.email,
                })
                .where("id = :id", { id })
                .execute();
        }
    }
}
