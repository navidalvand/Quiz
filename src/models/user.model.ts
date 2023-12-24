import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true, unique: true, type: String })
  username: string;

  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ type: String, default: '' })
  phone?: string;

  @Prop({ default: 'default.jpg' })
  avatar: string;

  @Prop({ default: 0 })
  score: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
