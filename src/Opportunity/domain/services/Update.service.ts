import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository } from 'typeorm';
import { GrantListItem } from '../../../Scraping/domain/ValueObjects/GrantListItem';
import { grantListItemToOpportunity } from '../../../Scraping/domain/mappers/GrantListItemToOpportunity';


@Injectable()
export class UpdateOpportunityService {
    constructor(
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>
    ) { }

    async update(grant: GrantListItem, foundOpportunity: Opportunity): Promise<GeneralResponse> {
        let opportunity = grantListItemToOpportunity(grant)

        const updatedOpportunity = await this.opportunityRepository.update(foundOpportunity, opportunity)

        if (updatedOpportunity.affected > 0)
            return { status: 'SUCCESS', message: 'Grant updated', payload: updatedOpportunity }

        return { status: 'ERROR_ROWS_NOT_UPDATED', message: 'Grant not updated', payload: null }

    }
}