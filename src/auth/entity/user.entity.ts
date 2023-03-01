import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    password: string;
}