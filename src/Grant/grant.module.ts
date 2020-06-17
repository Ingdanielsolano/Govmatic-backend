import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetGrantController } from "./application/GetDetails.controller";
import { CreateOpportunityService } from '../Opportunity/domain/services/Create.service';
import { UpdateGrantService } from '../Grant/domain/services/Update.service';
import { CreateAgencyService } from '../Agency/services/Create.service';
import { DeleteOldsGrantsService } from '../Grant/domain/services/DeleteOlds.service';
import { CreateGrantService } from '../Grant/domain/services/Create.service';
import { UpdateAgencyService } from 'src/Agency/services/Update.service';
import { CreateOpportunityApplicationTypeService } from 'src/OpportunityApplicationTypes/domain/services/Create.service';
import { CreateApplicantTypeService } from 'src/ApplicantType/domain/services/Create.service';
import { CreateOpportunityCfdasService } from 'src/OpportunityCfdas/domain/services/Create.service';
import { CreateCfdaService } from 'src/Cfdas/domain/services/Create.service';
import { CreateCategoryService } from 'src/Category/domain/services/Create.service';
import { CreateOpportunityFundingCategoryActivityService } from 'src/OpportunityFundingCategoryActivity/domain/services/Create.service';
import { CreateFundingCategoryActivityService } from 'src/FundingCategoryActivity/domain/services/Create.service';
import { CreateOpportunityFundingInstrumentService } from 'src/OpportunityFundingInstruments/domain/services/Create.service';
import { CreateFundingInstrumentsService } from 'src/FundingInstruments/domain/services/Create.service';
import { CompareService } from '../Scraping/domain/services/Compare.service';
import { Grant } from 'src/db/entities/business/Grant';
import { Opportunity } from 'src/db/entities/business/Opportunity';
import { Agency } from 'src/db/entities/business/Agency';
import { OpportunityApplicantType } from 'src/db/entities/business/OpportunityApplicantTypes';
import { ApplicantType } from 'src/db/entities/business/ApplicantTypes';
import { OpportunityCfdas } from 'src/db/entities/business/OpportunityCfdas';
import { Cfdas } from 'src/db/entities/business/Cfdas';
import { Category } from 'src/db/entities/business/Category';
import { OpportunityFundingInstrument } from 'src/db/entities/business/OpportunityFundingInstrument';
import { FundingInstrument } from 'src/db/entities/business/FundingInstrument';
import { FundingCategoryActivity } from 'src/db/entities/business/FundingCategoryActivity';
import { OpportunityFundingCategoryActivity } from 'src/db/entities/business/OpportunityFundingCategoryActivity';
import { GetGrantDetailUseCase } from './infrastructure/UseCases/GetDetail';
import { FindGrantService } from './domain/services/Find.service';
import { GetGrantDetail } from 'src/Scraping/infrastructure/GetGrantDetail';
import { UpdateDetailGrantService } from './domain/services/UpdateDetail.service';
import { Downloader } from 'src/Scraping/infrastructure/Downloader';
import { CreateAttachmentService } from 'src/Attachment/domain/services/Create.service';
import { Attachment } from 'src/db/entities/business/Attachment';
import { AttachmentFolder } from 'src/db/entities/business/Attachment_folder';
import { CreateAttachmentFolderService } from 'src/AttachmentFolder/domain/services/Create.service';
import { CreateGrantPackageService } from 'src/GrantPackage/domain/services/Create.service';
import { CreatePackageService } from 'src/Package/domain/services/Create.service';
import { Package } from 'src/db/entities/business/Package';
import { GrantPackage } from 'src/db/entities/business/GrantPackage';
import { FindOpportunityService } from 'src/Opportunity/domain/services/FindOpportunity.service';
import { UpdateOpportunityService } from 'src/Opportunity/domain/services/Update.service';

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
    controllers: [GetGrantController],
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
        UpdateOpportunityService        
    ]
})
export class GrantModule { }
