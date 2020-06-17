import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpportunityFundingInstrument } from '../../../db/entities/business/OpportunityFundingInstrument';
import { CreateFundingInstrumentsService } from '../../../FundingInstruments/domain/services/Create.service';


@Injectable()
export class CreateOpportunityFundingInstrumentService {
    constructor(
        @InjectRepository(OpportunityFundingInstrument)
        private opportunityFundingInstrumentRepository: Repository<OpportunityFundingInstrument>,
        private readonly createFundingInstrumentsService: CreateFundingInstrumentsService
    ) { }

    async create(opportunityFundingInstrument: OpportunityFundingInstrument): Promise<GeneralResponse> {

        const opportunityFundingInstrumentExists = await this.opportunityFundingInstrumentRepository.findOne({
            where: {
                opportunity: opportunityFundingInstrument.opportunity,
                fundingInstrument: { code: opportunityFundingInstrument.fundingInstrument.code }
            }
        })

        if (opportunityFundingInstrumentExists)
            return {
                status: 'SUCCESS', message: 'Opportunity funding created', payload: opportunityFundingInstrumentExists
            }

        const createdFundingInstrument = await this.createFundingInstrumentsService.create(opportunityFundingInstrument.fundingInstrument)

        if (createdFundingInstrument.status != 'SUCCESS')
            return createdFundingInstrument

        const newOpportunityFundingInstrument = await this.opportunityFundingInstrumentRepository.save({
            opportunity: { id: opportunityFundingInstrument.opportunity.id },
            applicantTypes: { id: createdFundingInstrument.payload.id }
        })

        return { status: 'SUCCESS', message: 'Opportunity funding created', payload: newOpportunityFundingInstrument }
    }
}