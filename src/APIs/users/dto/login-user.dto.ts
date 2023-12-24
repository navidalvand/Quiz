import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  usernameOrEmail: string;

  @Length(8, 24)
  @IsString()
  @IsNotEmpty()
  password: string;
}
