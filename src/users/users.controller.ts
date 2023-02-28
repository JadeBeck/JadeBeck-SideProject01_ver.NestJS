import {Controller, Get, Post, Put, Delete, Req, Query, Param, Body} from '@nestjs/common';
import {Request} from 'express';
import {CreateUsersDto, UpdateUsersDto, ListAllEntities} from "./dto";
import {UsersService} from './users.service';
import {User} from './interfaces/user.interface';

@Controller('users') //nest g controller users 후 'users'라는 라우팅 패스가 자동으로 추가됨(e.g. http://localhost:3003/users) & 하위 메소드들의 접두어 역할을 하므로 반복 작성할 필요가 없음
export class UsersController {
    constructor(private usersService: UsersService) {
    };

    @Post()
    async create(@Body() user: User) {
       return  this.usersService.create(user);
    }

    @Get()
    async findAll(): Promise<User[]> {  //User의 배열값으로 리턴
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {  //비동기 함수는 Promise를 반환해야 함
        return this.usersService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateuserDto: UpdateUsersDto) {
        return `This action updates a #${id} user`
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        this.usersService.remove(id);
    }

}