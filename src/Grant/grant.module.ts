import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetGrantController } from "./application/GetDetails.controller";
import { CreateOpportunityService } from '../Opportunity/domain/services/Create.service';
import { UpdateGrantService } from '../Grant/domain/services/Update.service';
import { CreateAgencyService } from '../Agency/services/Create.service';
import { DeleteOldsGrantsService } from '../Grant/domain/services/DeleteOlds.service';
import { CreateGrantService } from '../Grant/domain/services/Create.service';
import { UpdateAgencyService } from '../Agency/services/Update.service';
import { CreateOpportunityApplicationTypeService } from '../OpportunityApplicationTypes/domain/services/Create.service';
import { CreateApplicantTypeService } from '../ApplicantType/domain/services/Create.service';
import { CreateOpportunityCfdasService } from '../OpportunityCfdas/domain/services/Create.service';
import { CreateCfdaService } from '../Cfdas/domain/services/Create.service';
import { CreateCategoryService } from '../Category/domain/services/Create.service';
import { CreateOpportunityFundingCategoryActivityService } from '../OpportunityFundingCategoryActivity/domain/services/Create.service';
import { CreateFundingCategoryActivityService } from '../FundingCategoryActivity/domain/services/Create.service';
import { CreateOpportunityFundingInstrumentService } from '../OpportunityFundingInstruments/domain/services/Create.service';
import { CreateFundingInstrumentsService } from '../FundingInstruments/domain/services/Create.service';
import { CompareService } from '../Scraping/domain/services/Compare.service';
import { Grant } from '../db/entities/business/Grant';
import { Opportunity } from '../db/entities/business/Opportunity';
import { Agency } from '../db/entities/business/Agency';
import { OpportunityApplicantType } from '../db/entities/business/OpportunityApplicantTypes';
import { ApplicantType } from '../db/entities/business/ApplicantTypes';
import { OpportunityCfdas } from '../db/entities/business/OpportunityCfdas';
import { Cfdas } from '../db/entities/business/Cfdas';
import { Category } from '../db/entities/business/Category';
import { OpportunityFundingInstrument } from '../db/entities/business/OpportunityFundingInstrument';
import { FundingInstrument } from '../db/entities/business/FundingInstrument';
import { FundingCategoryActivity } from '../db/entities/business/FundingCategoryActivity';
import { OpportunityFundingCategoryActivity } from '../db/entities/business/OpportunityFundingCategoryActivity';
import { GetGrantDetailUseCase } from './infrastructure/UseCases/GetDetail';
import { FindGrantService } from './domain/services/Find.service';
import { GetGrantDetail } from '../Scraping/infrastructure/GetGrantDetail';
import { UpdateDetailGrantService } from './domain/services/UpdateDetail.service';
import { Downloader } from '../Scraping/infrastructure/Downloader';
import { CreateAttachmentService } from '../Attachment/domain/services/Create.service';
import { Attachment } from '../db/entities/business/Attachment';
import { AttachmentFolder } from '../db/entities/business/Attachment_folder';
import { CreateAttachmentFolderService } from '../AttachmentFolder/domain/services/Create.service';
import { CreateGrantPackageService } from '../GrantPackage/domain/services/Create.service';
import { CreatePackageService } from '../Package/domain/services/Create.service';
import { Package } from '../db/entities/business/Package';
import { GrantPackage } from '../db/entities/business/GrantPackage';
import { FindOpportunityService } from '../Opportunity/domain/services/FindOpportunity.service';
import { UpdateOpportunityService } from '../Opportunity/domain/services/Update.service';
import { GetGrantListController } from './application/GetGrantList.controller';
import { GetListGrantService } from './domain/services/GetList.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Grant,
            Opportunity,
            Agency,
            OpportunityApplicantType,
            ApplicantType,
            OpportunityCfdas,
            Cfdas,
            Category,
            OpportunityFundingInstrument,
            FundingInstrument,
            FundingCategoryActivity,
            OpportunityFundingCategoryActivity,
            Attachment,
            AttachmentFolder,
            Package,
            GrantPackage
        ])
    ],
    controllers: [GetGrantController, GetGrantListController],
    providers: [
        CompareService,
        CreateGrantService,
        UpdateGrantService,
        DeleteOldsGrantsService,
        CreateAgencyService,
        CreateOpportunityService,
        UpdateAgencyService,
        CreateOpportunityApplicationTypeService,
        CreateApplicantTypeService,
        CreateOpportunityCfdasService,
        CreateCfdaService,
        CreateCategoryService,
        CreateOpportunityFundingCategoryActivityService,
        CreateFundingCategoryActivityService,
        CreateOpportunityFundingInstrumentService,
        CreateFundingInstrumentsService,
        GetGrantDetailUseCase,
        FindGrantService,
        GetGrantDetail,
        UpdateDetailGrantService,
        Downloader,
        CreateAttachmentService,
        CreateAttachmentFolderService,
        CreateGrantPackageService,
        CreatePackageService,
        FindOpportunityService,
        UpdateOpportunityService,
        GetListGrantService
    ]
})
export class GrantModule { }
