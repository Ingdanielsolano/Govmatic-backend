import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository } from 'typeorm';
import { GrantDetail } from '../../../Scraping/domain/ValueObjects/GrantDetail';
import { grantDetailToOpportunity } from '../../../Scraping/domain/mappers/GrantDetailToOpportunity';
import { Cfdas } from '../../../db/entities/business/Cfdas';


@Injectable()
export class UpdateDetailService {
    constructor(
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>,
        private cfdasRepository: Repository<Cfdas>,
    ) { }

    async update(grant: GrantDetail, foundOpportunity: Opportunity): Promise<GeneralResponse> {
        let { opportunity, applicantTypes, fundingCategoryActivities, fundingInstruments, cfdas } = grantDetailToOpportunity(grant)

        const updatedOpportunity = await this.opportunityRepository.update(foundOpportunity, opportunity)

        const newCfdas = await this.cfdasRepository.save(cfdas)

        console.log(newCfdas);

        // if (updatedOpportunity.affected > 0)
        //     return { status: 'SUCCESS', message: 'Grant updated', payload: updatedOpportunity }

        return { status: 'ERROR_ROWS_NOT_UPDATED', message: 'Grant not updated', payload: null }

    }
}