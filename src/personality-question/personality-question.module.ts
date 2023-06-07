import { Module } from '@nestjs/common';
import { PersonalityQuestionService } from './personality-question.service';
import { PersonalityQuestionController } from './personality-question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalityQuestion } from './entities/personality-question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalityQuestion])],
  controllers: [PersonalityQuestionController],
  providers: [PersonalityQuestionService]
})
export class PersonalityQuestionModule {}
