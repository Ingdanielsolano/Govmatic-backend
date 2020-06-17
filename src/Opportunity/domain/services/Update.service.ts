import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository } from 'typeorm';
import { UpdateAgencyService } from 'src/Agency/services/Update.service';
import { CreateOpportunityApplicationTypeService } from 'src/OpportunityApplicationTypes/domain/services/Create.service';
import { CreateCategoryService } from 'src/Category/domain/services/Create.service';
import { CreateOpportunityCfdasService } from 'src/OpportunityCfdas/domain/services/Create.service';
import { CreateOpportunityFundingCategoryActivityService } from 'src/OpportunityFundingCategoryActivity/domain/services/Create.service';
import { CreateOpportunityFundingInstrumentService } from 'src/OpportunityFundingInstruments/domain/services/Create.service';


@Injectable()
export class UpdateOpportunityService {
    constructor(
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>,
        private readonly updateAgencyService: UpdateAgencyService,
        private readonly createOpportunityApplicationType: CreateOpportunityApplicationTypeService,
        private readonly createOpportunityCfdasService: CreateOpportunityCfdasService,
        private readonly createCategoryService: CreateCategoryService,
        private readonly createOpportunityFundingCategoryActivityService: CreateOpportunityFundingCategoryActivityService,
        private readonly createOpportunityFundingInstrumentService: CreateOpportunityFundingInstrumentService,
    ) { }

    async update(opportunity: Opportunity): Promise<GeneralResponse> {        
        
        const updatedAgency = await this.updateAgencyService.update(opportunity.agency)
        opportunity.agency.id = updatedAgency.payload.id
        for (let i = 0; i < opportunity.applicantTypes.length; i++) {
            opportunity.applicantTypes[i].opportunity.id = opportunity.id;
            const newApplicationType = await this.createOpportunityApplicationType.create(opportunity.applicantTypes[i])
            opportunity.applicantTypes[i] = newApplicationType.payload
        }

        opportunity.applicantTypes = []

        const newCategory = await this.createCategoryService.create(opportunity.category)
        if (newCategory.status != 'SUCCESS')
            return newCategory

        opportunity.category = newCategory.payload

        for (const cfdas of opportunity.cfdas) {
            cfdas.opportunity = opportunity;
            const newCfdas = await this.createOpportunityCfdasService.create(cfdas)
        }

        for (const fundingCategoryActivities of opportunity.fundingCategoryActivities) {
            fundingCategoryActivities.opportunity.id = opportunity.id;
            const newFundingCategoryActivities = await this.createOpportunityFundingCategoryActivityService.create(fundingCategoryActivities)
        }

        for (const fundingInstruments of opportunity.fundingInstruments) {
            fundingInstruments.opportunity.id = opportunity.id;
            const newFundingInstruments = await this.createOpportunityFundingInstrumentService.create(fundingInstruments)
        }
        
        const updatedOpportunity = await this.opportunityRepository.update({ id: opportunity.id }, {
            applicantElegibilityDesc: opportunity.applicantElegibilityDesc,
            archiveDate: opportunity.archiveDate,
            awardCeiling: opportunity.awardCeiling,
            awardFloor: opportunity.awardFloor,
            costSharing: opportunity.costSharing,
            category: opportunity.category,
            estimatedFunding: opportunity.estimatedFunding,
            lastUpdateDate: opportunity.lastUpdateDate,
            numberOfAwards: opportunity.numberOfAwards,
            postingDate: opportunity.postingDate,
            responseDate: opportunity.responseDate,
            responseDateDesc: opportunity.responseDateDesc,
            synopsisDesc: opportunity.synopsisDesc
        })

        if (updatedOpportunity.affected > 0)
            return { status: 'SUCCESS', message: 'Grant updated', payload: updatedOpportunity }

        return { status: 'ERROR_ROWS_NOT_UPDATED', message: 'Grant not updated', payload: null }

    }
}