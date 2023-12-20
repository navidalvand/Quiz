import { Module } from '@nestjs/common';
import { QuizModule } from './APIs/quiz/quiz.module';
import { UsersModule } from './APIs/users/users.module';
import { BattleModule } from './APIs/battle/battle.module';
import { AdminModule } from './APIs/admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    QuizModule,
    UsersModule,
    BattleModule,
    AdminModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/quiz'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
