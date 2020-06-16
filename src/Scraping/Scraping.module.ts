import { Module } from '@nestjs/common';
import { StartScrapingController } from './application/controllers/Start.controller';
import { StartScrapingService } from './domain/services/Start.service';
import { GetGrantList } from './infrastructure/GetGrantList';
import { CompareService } from './domain/services/Compare.service';
import { Opportunity } from '../db/entities/business/Opportunity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateOpportunityService } from '../Opportunity/domain/services/Create.service';
import { Downloader } from './infrastructure/Downloader';
import { UpdateGrantService } from '../Grant/domain/services/Update.service';
import { CreateAgencyService } from '../Agency/services/Create.service';
import { Agency } from '../db/entities/business/Agency';
import { VerifyMustUpdateService } from '../Grant/domain/services/VerifyMustUpdate.service';
import { DeleteOldsGrantsService } from '../Grant/domain/services/DeleteOlds.service';
import { Grant } from '../db/entities/business/Grant';
import { CreateGrantService } from '../Grant/domain/services/Create.service';

@Module({
    imports: [TypeOrmModule.forFeature([Opportunity, Agency, Grant])],
    controllers: [StartScrapingController],
    providers: [
        StartScrapingService,
        GetGrantList,
        CompareService,
        CreateOpportunityService,
        UpdateGrantService,
        CreateAgencyService,
        Downloader,
        VerifyMustUpdateService,
        DeleteOldsGrantsService,
        CreateGrantService
    ]
})
export class ScrapingModule { }
