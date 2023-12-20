import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @Length(8, 18)
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Length(8, 24)
  @IsString()
  @IsNotEmpty()
  password: string;

  @Length(8, 24)
  @IsString()
  @IsNotEmpty()
  confirm_password: string;

  @IsString()
  phone: string;
}
