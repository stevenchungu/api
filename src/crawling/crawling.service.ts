// crawling.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import cheerio from 'cheerio';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobListing } from './job-listing.entity';

@Injectable()
export class CrawlingService {
  constructor(
    @InjectRepository(JobListing)
    private readonly jobListingRepository: Repository<JobListing>,
  ) {}

  async crawlWebsite(): Promise<JobListing[]> {
    const url = 'https://jobsearchmalawi.com/';

    try {
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);

      // Select the job listings container and iterate over each job listing
      const jobListings = $('.job_listings li').map((_, element) => {
        const title = $(element).find('.position h3').text().trim();
        const company = $(element).find('.position .company strong').text().trim();
        const location = $(element).find('.location').text().trim();

        return { title, company, location };
      }).get();

      // Save the job listings to the database
      const savedJobListings = await this.jobListingRepository.save(jobListings);

      return savedJobListings;
    } catch (error) {
      throw new Error('Crawling failed');
    }
  }
}
