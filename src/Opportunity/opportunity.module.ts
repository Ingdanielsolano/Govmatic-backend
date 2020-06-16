import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opportunity } from 'src/db/entities/business/Opportunity';
import { GetDeatailOpportunityController } from './application/GetDetails.controller';
import { FindOpportunityService } from './domain/services/FindOpportunity.service';
import { GetGrantDetail } from '../Scraping/infrastructure/GetGrantDetail';
import { Downloader } from '../Scraping/infrastructure/Downloader';
import { GetOpportunityDetail } from './infrastructure/UseCases/GetDetail';
import { UpdateDetailService } from './domain/services/UpdateDetail.service';
import { Cfdas } from '../db/entities/business/Cfdas';
import { CreateCfdaService } from '../Cfdas/domain/services/Create.service';
import { CreateOpportunityApplicationTypeService } from '../OpportunityApplicationTypes/domain/services/Create.service';
import { CreateApplicantTypeService } from '../ApplicantType/domain/services/Create.service';
import { ApplicantType } from '../db/entities/business/ApplicantTypes';
import { OpportunityApplicantType } from '../db/entities/business/OpportunityApplicantTypes';
import { CreateFundingCategoryActivityService } from '../FundingCategoryActivity/domain/services/Create.service';
import { FundingCategoryActivity } from '../db/entities/business/FundingCategoryActivity';
import { OpportunityFundingCategoryActivity } from '../db/entities/business/OpportunityFundingCategoryActivity';
import { CreateOpportunityFundingCategoryActivityService } from '../OpportunityFundingCategoryActivity/domain/services/Create.service';
import { FundingInstrument } from '../db/entities/business/FundingInstrument';
import { OpportunityFundingInstrument } from '../db/entities/business/OpportunityFundingInstrument';
import { CreateFundingInstrumentsService } from 'src/FundingInstruments/domain/services/Create.service';
import { CreateOpportunityFundingInstrumentService } from 'src/OpportunityFundingInstruments/domain/services/Create.service';
import { UpdateAgencyService } from 'src/Agency/services/Update.service';
import { Agency } from 'src/db/entities/business/Agency';
import { CreateCategoryervice } from 'src/Category/services/Create.service';
import { Category } from 'src/db/entities/business/Category';



@Module({
    imports: [
        TypeOrmModule.forFeature([
            Opportunity,
            Cfdas,
            ApplicantType,
            Agency,
            OpportunityApplicantType,
            FundingCategoryActivity,
            OpportunityFundingCategoryActivity,
            FundingInstrument,
            OpportunityFundingInstrument,
            Category
        ])
    ],
    controllers: [GetDeatailOpportunityController],
    providers: [
        FindOpportunityService,
        GetGrantDetail,
        Downloader,
        GetOpportunityDetail,
        UpdateDetailService,
        CreateOpportunityApplicationTypeService,
        CreateCfdaService,
        CreateApplicantTypeService,
        CreateFundingCategoryActivityService,
        CreateOpportunityFundingCategoryActivityService,
        CreateFundingInstrumentsService,
        CreateOpportunityFundingInstrumentService,
        UpdateAgencyService,
        CreateCategoryervice
    ]
})
export class OpportunityModule { }
