import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {

  id: string

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(21)
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  subdominio: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

}

export class FindIdParams {
  @IsString()
  id: string;
}
