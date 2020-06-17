import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository } from 'typeorm';
import { GrantDetail } from '../../../Scraping/domain/ValueObjects/GrantDetail';
import { grantDetailToGrant } from '../../../Scraping/domain/mappers/GrantDetailToGrant';
import { CreateCfdaService } from '../../../Cfdas/domain/services/Create.service';
import { CreateApplicantTypeService } from '../../../ApplicantType/domain/services/Create.service';
import { CreateOpportunityApplicationTypeService } from '../../../OpportunityApplicationTypes/domain/services/Create.service';
import { ApplicantType } from '../../../db/entities/business/ApplicantTypes';
import { CreateFundingCategoryActivityService } from '../../../FundingCategoryActivity/domain/services/Create.service';
import { FundingCategoryActivity } from '../../../db/entities/business/FundingCategoryActivity';
import { CreateOpportunityFundingCategoryActivityService } from '../../../OpportunityFundingCategoryActivity/domain/services/Create.service';
import { FundingInstruments } from '../../../Scraping/domain/ValueObjects/FundingInstruments';
import { CreateFundingInstrumentsService } from '../../../FundingInstruments/domain/services/Create.service';
import { CreateOpportunityFundingInstrumentService } from '../../../OpportunityFundingInstruments/domain/services/Create.service';
import { UpdateAgencyService } from 'src/Agency/services/Update.service';
import { CreateCategoryService } from 'src/Category/domain/services/Create.service';
import { Grant } from 'src/db/entities/business/Grant';
import { CreateAttachmentService } from 'src/Attachment/domain/services/Create.service';
import { CreateGrantPackageService } from 'src/GrantPackage/domain/services/Create.service';
import { FindOpportunityService } from 'src/Opportunity/domain/services/FindOpportunity.service';
import { UpdateOpportunityService } from 'src/Opportunity/domain/services/Update.service';
import { CreateOpportunityService } from 'src/Opportunity/domain/services/Create.service';



@Injectable()
export class UpdateDetailGrantService {
    constructor(
        @InjectRepository(Opportunity)
        private grantRepository: Repository<Grant>,
        private readonly updateAgencyService: UpdateAgencyService,
        private readonly createAttachmentService: CreateAttachmentService,
        private readonly createGrantPackageService: CreateGrantPackageService,
        private readonly findOpportunityService: FindOpportunityService,
        private readonly updateOpportunityService: UpdateOpportunityService,
        private readonly createOpportunityService: CreateOpportunityService
    ) { }

    async update(grantDetail: GrantDetail, foundGrant: Grant): Promise<GeneralResponse> {
        let grant: Grant = grantDetailToGrant(grantDetail)
        grant.status = foundGrant.status

        const updatedAgency = await this.updateAgencyService.update(grant.agency)

        for (const attachment of grant.attachments) {
            attachment.grant = foundGrant
            const newAttachmentservice = await this.createAttachmentService.create(attachment)
        }

        for (const _package of grant.grantPackage) {
            _package.grant = foundGrant
            const newGrantPackage = await this.createGrantPackageService.create(_package)
        }

        for (const opportunity of grant.opportunities) {
            const opportunityExists = await this.findOpportunityService.find(opportunity.number)
            if (opportunityExists) {
                await this.updateOpportunityService.update({ ...opportunity, id: opportunityExists.id, grant: foundGrant })
                continue
            }
            await this.createOpportunityService.create(opportunity)
        }
        return { status: 'SUCCESS', message: 'Grant updated', payload: grant }

    }
}