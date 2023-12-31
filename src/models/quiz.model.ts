import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Quiz {
  @Prop({ required: true, type: String })
  question: string;

  @Prop({ required: true, type: String })
  author: string;

  @Prop({ required: true, type: [String] })
  answers: string[];

  @Prop({ type: String, default: '' })
  correctAnswer: string;

  @Prop({ required: true })
  category: string;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
