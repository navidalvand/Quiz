import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [QuizModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
