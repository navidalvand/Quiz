import { Module } from '@nestjs/common';
import { QuizModule } from './APIs/quiz/quiz.module';
import { UsersModule } from './APIs/users/users.module';
import { BattleModule } from './APIs/battle/battle.module';
import { AdminModule } from './APIs/admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';

@Module({
  imports: [
    QuizModule,
    UsersModule,
    BattleModule,
    AdminModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/quiz'),

    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
