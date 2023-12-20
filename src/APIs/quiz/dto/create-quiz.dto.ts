export class CreateQuizDto {
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
  author: string;
}
