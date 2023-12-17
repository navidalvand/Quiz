import { Module } from '@nestjs/common';
import { BattleModule } from './battle/battle.module';
import { UsersModule } from './users/users.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [BattleModule, UsersModule, QuizModule],
})
export class AdminModule {}
