import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PersonalityQuestionService } from './personality-question.service';
import { PersonalityQuestion } from './entities/personality-question.entity';
import { ApiQuestionData } from './dto/create-personality-question.dto';

@Controller('personality-questions')
export class PersonalityQuestionController {
  constructor(private readonly personalityQuestionService: PersonalityQuestionService) {}

  @Get()
  getAll(): Promise<PersonalityQuestion[]> {
    return this.personalityQuestionService.getAll();
  }

  @Post()
  async create(@Body() question: ApiQuestionData[]): Promise<void> {
    await this.personalityQuestionService.create(question);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() question: PersonalityQuestion): Promise<PersonalityQuestion> {
    return this.personalityQuestionService.update(id, question);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.personalityQuestionService.delete(id);
  }
}
