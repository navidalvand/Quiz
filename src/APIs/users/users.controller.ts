import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Patch,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @UsePipes(new ValidationPipe())
  create(
    @Body() userData: CreateUserDto,
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.usersService.create(userData, request, response);
  }

  @Post('/login')
  @UsePipes(new ValidationPipe())
  login(@Body() loginInfo: LoginUserDto) {
    return this.usersService.login(loginInfo);
  }

  @Get('/profile')
  getProfile() {
    return this.usersService.getProfile();
  }

  @Patch('/profile')
  updateProfile() {
    return this.usersService.updateProfile();
  }

  @Patch('/avatar')
  updateAvatar() {
    return this.usersService.updateAvatar();
  }

  @Post('/add-firend/:username')
  sendFriendRequest() {
    return this.usersService.sendFriendRequest();
  }

  @Get('/friend-requests')
  getFriendRequest() {
    return this.usersService.getFriendRequest();
  }

  @Delete('/delete-friend/:id')
  deleteFriend() {
    return this.usersService.deleteFriend();
  }
}
