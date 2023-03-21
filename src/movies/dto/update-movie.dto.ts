import {IsNumber, IsString} from 'class-validator';
import {PartialType} from '@nestjs/mapped-types'
import {CreateMovieDto} from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
//윗줄 means UpdateMovieDto will simply extend the CreateMovieDto but the factors are not required
}