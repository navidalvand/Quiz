import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.model';
import { CreateUserType } from './types/create-user.type';
import { LoginUserType } from './types/login-user.type';
import { HashService } from 'src/services/hash.service';
import { Request, Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly hashService: HashService,
  ) {}

  async create(userData: CreateUserType, request: Request, response: Response) {
    try {
      const { confirm_password, email, password, username, phone } = userData;

      if (password !== confirm_password)
        return new BadRequestException({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'password and confirm_password must be the same',
        });

      const hashedPassword = await this.hashService.encrypt(password);

      response.cookie('key', 'value');

      console.log(request.cookies);

      const user = await this.userModel.create({
        username,
        password: hashedPassword,
        email,
        phone,
      });

      if (!user)
        return new BadRequestException({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'cannot create the user',
        });

      return { message: 'user created', statusCode: HttpStatus.CREATED, user };
    } catch (error) {
      return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(loginData: LoginUserType) {
    try {
      const { password, usernameOrEmail } = loginData;

      const checkUsernameOrEmail = await this.userModel.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      });

      if (!checkUsernameOrEmail)
        return new BadRequestException({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'username or password is wrong',
        });
      const comparePass = await this.hashService.compare(
        password,
        checkUsernameOrEmail.password,
      );
      if (!comparePass)
        return new BadRequestException({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'username or password is wrong',
        });

      return {
        message: 'logged in',
        user: checkUsernameOrEmail,
        statusCode: HttpStatus.OK,
      };
    } catch (error) {
      return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  getProfile() {
    return 'profile';
  }

  updateProfile() {
    return 'update';
  }

  updateAvatar() {
    return 'avatar';
  }

  sendFriendRequest() {
    return 'sent';
  }
  getFriendRequest() {
    return 'firends';
  }

  deleteFriend() {
    return 'deleted';
  }
}
