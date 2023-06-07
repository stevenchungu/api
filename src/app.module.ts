import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalityQuestionModule } from './personality-question/personality-question.module';
import { JobsModule } from './jobs/jobs.module';
import { CrawlingModule } from './crawling/crawling.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', 
    password: '', 
    database: 'tsogolo',
    "entities": [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: true,
  }), 
  PersonalityQuestionModule,
  CrawlingModule
],
  
})
export class AppModule {}
