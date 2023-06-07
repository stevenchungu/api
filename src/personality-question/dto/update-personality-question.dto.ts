import { PartialType } from '@nestjs/mapped-types';
import { ApiQuestionData } from './create-personality-question.dto';


export class UpdatePersonalityQuestionDto extends PartialType(ApiQuestionData) {}
