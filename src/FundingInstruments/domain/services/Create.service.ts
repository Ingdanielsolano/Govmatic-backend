import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FundingInstrument } from '../../../db/entities/business/FundingInstrument';

@Injectable()
export class CreateFundingInstrumentsService {
    constructor(
        @InjectRepository(FundingInstrument)
        private fundingInstrumentRepository: Repository<FundingInstrument>
    ) { }

    async create(fundingInstrument: FundingInstrument): Promise<GeneralResponse> {

        const fundingInstrumentExists = await this.fundingInstrumentRepository.findOne({
            where: { code: fundingInstrument.code }
        })

        if (fundingInstrumentExists)
            return {
                status: 'SUCCESS',
                message: 'Funding instrument type created',
                payload: fundingInstrumentExists
            }

        const newFundingInstrument = await this.fundingInstrumentRepository.save(fundingInstrument)

        return { status: 'SUCCESS', message: 'Funding instrument created', payload: newFundingInstrument }
    }
}