import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpportunityFundingInstrument } from '../../../db/entities/business/OpportunityFundingInstrument';


@Injectable()
export class CreateOpportunityFundingInstrumentService {
    constructor(
        @InjectRepository(OpportunityFundingInstrument)
        private opportunityFundingInstrumentRepository: Repository<OpportunityFundingInstrument>
    ) { }

    async create(opportunityFundingInstrument: OpportunityFundingInstrument): Promise<GeneralResponse> {

        const opportunityFundingInstrumentExists = await this.opportunityFundingInstrumentRepository.findOne({ where: { opportunity: opportunityFundingInstrument.opportunity, fundingInstrument: opportunityFundingInstrument.fundingInstrument } })

        if (opportunityFundingInstrumentExists)
            return {
                status: 'SUCCESS', message: 'Opportunity funding created', payload: opportunityFundingInstrumentExists
            }

        const newOpportunityFundingInstrument = await this.opportunityFundingInstrumentRepository.save(opportunityFundingInstrument)

        return { status: 'SUCCESS', message: 'Opportunity funding created', payload: newOpportunityFundingInstrument }
    }
}