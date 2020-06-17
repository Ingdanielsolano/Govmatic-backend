import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpportunityFundingCategoryActivity } from '../../../db/entities/business/OpportunityFundingCategoryActivity';
import { CreateFundingCategoryActivityService } from '../../../FundingCategoryActivity/domain/services/Create.service';


@Injectable()
export class CreateOpportunityFundingCategoryActivityService {
    constructor(
        @InjectRepository(OpportunityFundingCategoryActivity)
        private opportunityFundingCategoryActivityRepository: Repository<OpportunityFundingCategoryActivity>,
        private readonly createFundingCategoryActivity: CreateFundingCategoryActivityService
    ) { }

    async create(opportunityFundingCategoryActivity: OpportunityFundingCategoryActivity): Promise<GeneralResponse> {

        const opportunityFundingCategoryActivityExists = await this.opportunityFundingCategoryActivityRepository.findOne({
            where: {
                opportunity: { id: opportunityFundingCategoryActivity.opportunity.id },
                fundingCategoryActivity: { code: opportunityFundingCategoryActivity.fundingCategoryActivity.code }
            }
        })

        if (opportunityFundingCategoryActivityExists)
            return {
                status: 'SUCCESS', message: 'OpportunityApplicationType created', payload: opportunityFundingCategoryActivityExists
            }

        const createdFundingCategoryActivity = await this.createFundingCategoryActivity.create(opportunityFundingCategoryActivity.fundingCategoryActivity)

        if (createdFundingCategoryActivity.status != 'SUCCESS')
            return createdFundingCategoryActivity

        const newOpportunityFundingCategoryActivity = await this.opportunityFundingCategoryActivityRepository.save({
            opportunity: { id: opportunityFundingCategoryActivity.opportunity.id },
            applicantTypes: { id: createdFundingCategoryActivity.payload.id }
        })

        return { status: 'SUCCESS', message: 'Opportunity funding category activity created', payload: newOpportunityFundingCategoryActivity }
    }
}