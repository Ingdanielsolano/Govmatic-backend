import { Module } from '@nestjs/common';
import { StartScrapingController } from './application/controllers/Start.controller';
import { StartScrapingService } from './domain/services/Start.service';
import { GetGrantList } from './infrastructure/GetGrantList';
import { CompareService } from './domain/services/Compare.service';
import { Opportunity } from '../db/entities/business/Opportunity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateOpportunityService } from '../Opportunity/domain/services/Create.service';
import { Downloader } from './infrastructure/Downloader';
import { UpdateOpportunityService } from '../Opportunity/domain/services/Update.service';
import { CreateAgencyService } from '../Agency/services/Create.service';
import { Agency } from '../db/entities/business/Agency';
import { VerifyMustUpdateService } from '../Opportunity/domain/services/VerifyMustUpdate.service';
import { DeleteOldsOpportunitiesService } from '../Opportunity/domain/services/DeleteOlds.service';

@Module({
    imports: [TypeOrmModule.forFeature([Opportunity, Agency])],
    controllers: [StartScrapingController],
    providers: [
        StartScrapingService,
        GetGrantList,
        CompareService,
        CreateOpportunityService,
        UpdateOpportunityService,
        CreateAgencyService,
        Downloader,
        VerifyMustUpdateService,
        DeleteOldsOpportunitiesService
    ]
})
export class ScrapingModule { }
