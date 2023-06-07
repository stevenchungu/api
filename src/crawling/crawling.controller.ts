// crawling.controller.ts
import { Controller, Get } from '@nestjs/common';
import { CrawlingService } from './crawling.service';

@Controller('crawl')
export class CrawlingController {
  constructor(private readonly crawlingService: CrawlingService) {}

  @Get()
  async crawlWebsite(): Promise<any[]> {
    const jobListings = await this.crawlingService.crawlWebsite();
    return jobListings;
  }
}
