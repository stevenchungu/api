import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonalityQuestion } from './entities/personality-question.entity';
import { ApiQuestionData } from './dto/create-personality-question.dto';


@Injectable()
export class PersonalityQuestionService {
  constructor(
    @InjectRepository(PersonalityQuestion)
    private readonly personalityQuestionRepository: Repository<PersonalityQuestion>,
  ) {}

  async getAll(): Promise<PersonalityQuestion[]> {
    return this.personalityQuestionRepository.find();
  }

  async create(questions: ApiQuestionData[]): Promise<void> {
    const personalityQuestions: PersonalityQuestion[] = questions.map((question) => {
      const personalityQuestion = new PersonalityQuestion();
      personalityQuestion.question = question.question;
      personalityQuestion.agreeType = question.agreeType;
      personalityQuestion.denialType = question.denialType;
      return personalityQuestion;
    });
  
    await this.personalityQuestionRepository.save(personalityQuestions);
  }
  

  async update(id: number, question: PersonalityQuestion): Promise<PersonalityQuestion> {
    await this.personalityQuestionRepository.update(id, question);
    return this.personalityQuestionRepository.findOne( { where: { id } });

  }

  async delete(id: number): Promise<void> {
    await this.personalityQuestionRepository.delete(id);
  }
}
