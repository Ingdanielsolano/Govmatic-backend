import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository } from 'typeorm';
import { UpdateAgencyService } from '../../../Agency/services/Update.service';
import { CreateOpportunityApplicationTypeService } from '../../../OpportunityApplicationTypes/domain/services/Create.service';
import { CreateOpportunityCfdasService } from '../../../OpportunityCfdas/domain/services/Create.service';
import { CreateCategoryService } from '../../../Category/domain/services/Create.service';
import { CreateOpportunityFundingCategoryActivityService } from '../../../OpportunityFundingCategoryActivity/domain/services/Create.service';
import { CreateOpportunityFundingInstrumentService } from '../../../OpportunityFundingInstruments/domain/services/Create.service';

@Injectable()
export class CreateOpportunityService {
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

    async create(opportunity: Opportunity): Promise<GeneralResponse> {

        const newCategory = await this.createCategoryService.create(opportunity.category)
        if (newCategory.status != 'SUCCESS')
            return newCategory

        opportunity.category = newCategory.payload

        const newOpportunity = await this.opportunityRepository.create(opportunity)
        opportunity.id = newOpportunity.id

        const updatedAgency = await this.updateAgencyService.update(opportunity.agency)
        opportunity.agency.id = updatedAgency.payload.id
        for (const applicantType of opportunity.applicantTypes) {
            applicantType.opportunity.id = opportunity.id;
            const newApplicationType = await this.createOpportunityApplicationType.create(applicantType)
        }

        for (const cfdas of opportunity.cfdas) {
            cfdas.opportunity.id = opportunity.id;
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

        return { status: 'SUCCESS', message: 'Opportunity created', payload: 'newOpportunity' }
    }
}