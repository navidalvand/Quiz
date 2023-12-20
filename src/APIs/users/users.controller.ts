import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @UsePipes(new ValidationPipe())
  create(@Body() body: CreateUserDto) {
    console.log(body);
    return this.usersService.create();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
