import { Module } from '@nestjs/common';
import { StartScrapingController } from './application/controllers/Start.controller';
import { StartScrapingService } from './domain/services/Start.service';
import { GetGrantList } from './infrastructure/GetGrantList';
import { Opportunity } from '../db/entities/business/Opportunity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpportunityFundingCategoryActivity } from 'src/db/entities/business/OpportunityFundingCategoryActivity';
import { Downloader } from './infrastructure/Downloader';
import { Agency } from '../db/entities/business/Agency';
import { OpportunityApplicantType } from 'src/db/entities/business/OpportunityApplicantTypes';
import { Grant } from '../db/entities/business/Grant';
import { VerifyMustUpdateService } from '../Grant/domain/services/VerifyMustUpdate.service';
import { ApplicantType } from 'src/db/entities/business/ApplicantTypes';
import { OpportunityCfdas } from 'src/db/entities/business/OpportunityCfdas';
import { Cfdas } from 'src/db/entities/business/Cfdas';
import { Category } from 'src/db/entities/business/Category';
import { OpportunityFundingInstrument } from 'src/db/entities/business/OpportunityFundingInstrument';
import { FundingInstrument } from 'src/db/entities/business/FundingInstrument';
import { FundingCategoryActivity } from 'src/db/entities/business/FundingCategoryActivity';
import { CompareService } from './domain/services/Compare.service';
import { CreateGrantService } from 'src/Grant/domain/services/Create.service';
import { UpdateGrantService } from 'src/Grant/domain/services/Update.service';
import { DeleteOldsGrantsService } from 'src/Grant/domain/services/DeleteOlds.service';
import { CreateAgencyService } from 'src/Agency/services/Create.service';


@Module({
    imports: [TypeOrmModule.forFeature([
        Opportunity,
        Agency,
        Grant,
        OpportunityApplicantType,
        ApplicantType,
        OpportunityCfdas,
        Cfdas,
        Category,
        OpportunityFundingCategoryActivity,
        FundingCategoryActivity,
        OpportunityFundingInstrument,
        FundingInstrument
    ])],
    controllers: [StartScrapingController]
    ,
    providers: [
        StartScrapingService,
        GetGrantList,
        Downloader,
        VerifyMustUpdateService,
        CompareService,
        CreateGrantService,
        UpdateGrantService,
        DeleteOldsGrantsService,
        CreateAgencyService,
    ]
})
export class ScrapingModule { }
