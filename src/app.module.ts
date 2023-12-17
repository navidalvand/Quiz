import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { UsersModule } from './users/users.module';
import { BattleModule } from './battle/battle.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [QuizModule, UsersModule, BattleModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
