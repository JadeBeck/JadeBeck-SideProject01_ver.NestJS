export class CreateUsersDto {
    name: string;
    age: number;
    email: string;
}

export class UpdateUsersDto {
    name: string;
    age: number;
    email: string;
}

export class ListAllEntities {
    name: string;
    age: number;
    email: string;
    limit: 2  //?
}