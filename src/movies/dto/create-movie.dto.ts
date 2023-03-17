import {IsNumber, IsString} from 'class-validator';

export class CreateMovieDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsString({each: true})
    readonly genre: string;
}