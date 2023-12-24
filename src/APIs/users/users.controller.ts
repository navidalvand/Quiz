import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @UsePipes(new ValidationPipe())
  create(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }

  @Post('/login')
  @UsePipes(new ValidationPipe())
  login(@Body() loginInfo: LoginUserDto) {
    return this.usersService.login(loginInfo);
  }
}
