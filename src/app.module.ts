import * as dotenv from 'dotenv';
dotenv.config({ path: `./env/${process.argv[2]}` });

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SCHEMA_BUSINESS } from './common/config/typeorm.config';
import { ScrapingModule } from './Scraping/Scraping.module';
import { OpportunityModule } from './Opportunity/opportunity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(SCHEMA_BUSINESS),
    ScrapingModule,
    OpportunityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
