import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpportunityFundingCategoryActivity } from 'src/db/entities/business/OpportunityFundingCategoryActivity';


@Injectable()
export class CreateOpportunityFundingCategoryActivityService {
    constructor(
        @InjectRepository(OpportunityFundingCategoryActivity)
        private opportunityFundingCategoryActivityRepository: Repository<OpportunityFundingCategoryActivity>
    ) { }

    async create(opportunityFundingCategoryActivity: OpportunityFundingCategoryActivity): Promise<GeneralResponse> {

        const opportunityFundingCategoryActivityExists = await this.opportunityFundingCategoryActivityRepository.findOne({ where: { opportunity: opportunityFundingCategoryActivity.opportunity, fundingCategoryActivity: opportunityFundingCategoryActivity.fundingCategoryActivity } })

        if (opportunityFundingCategoryActivityExists)
            return {
                status: 'SUCCESS', message: 'OpportunityApplicationType created', payload: opportunityFundingCategoryActivityExists
            }

        const newOpportunityFundingCategoryActivity = await this.opportunityFundingCategoryActivityRepository.save(opportunityFundingCategoryActivity)

        return { status: 'SUCCESS', message: 'OpportunityApplicationType created', payload: newOpportunityFundingCategoryActivity }
    }
}