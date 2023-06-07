import { Module } from '@nestjs/common';
import { CrawlingService } from './crawling.service';
import { CrawlingController } from './crawling.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobListing } from './job-listing.entity';

@Module({
imports : [TypeOrmModule.forFeature([JobListing]) ],
// Include the JobListing entity
  providers: [CrawlingService],
  controllers: [CrawlingController]
})
export class CrawlingModule {}
