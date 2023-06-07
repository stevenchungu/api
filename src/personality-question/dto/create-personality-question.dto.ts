import { IsInt, IsString } from 'class-validator';

export class ApiQuestionData {

  @IsString()
  question: string;

  @IsString()
  agreeType: string;

  @IsString()
  denialType: string;
}
