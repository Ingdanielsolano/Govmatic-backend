import * as dotenv from 'dotenv';
dotenv.config({ path: `./env/${process.argv[2]}` });

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SCHEMA_BUSINESS } from './common/config/typeorm.config';
import { ScrapingModule } from './Scraping/Scraping.module';
import { GrantModule } from './Grant/grant.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(SCHEMA_BUSINESS),
    ScrapingModule,
    GrantModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
