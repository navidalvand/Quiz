import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class UserSchema {
  @Prop({ unique: true, required: true, type: String })
  username: string;

  @Prop({ unique: true, required: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ unique: true, required: false, type: String })
  phone?: string;

  @Prop()
  games: { win: number; lost: number };
}
