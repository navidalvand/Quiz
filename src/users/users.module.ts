import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [AdminModule],
})
export class UsersModule {}
