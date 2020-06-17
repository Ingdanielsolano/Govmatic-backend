import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { Grant } from '../../../db/entities/business/Grant';
import { GrantListItem } from '../../../Scraping/domain/ValueObjects/GrantListItem';
import { grantListItemToGrant } from '../../../Scraping/domain/mappers/GrantListItemToGrant';
import { Opportunity } from '../../../db/entities/business/Opportunity';



@Injectable()
export class UpdateGrantService {
    constructor(
        @InjectRepository(Grant)
        private grantRepository: Repository<Grant>,
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>
    ) { }

    async update(grantListItem: GrantListItem, foundGrant: Grant): Promise<GeneralResponse> {
        let { grant, opportunity } = grantListItemToGrant(grantListItem)

        grant.agency.id = foundGrant.agency.id

        const updatedGrant = await this.grantRepository.update(foundGrant, grant)

        // if (updatedGrant.affected > 0)
        //     return { status: 'SUCCESS', message: 'Grant updated', payload: updatedGrant }

        const updatedOpportunity = await this.opportunityRepository.update({ grant: { id: foundGrant.id } }, { ...opportunity, grant: { id: foundGrant.id } })

        if (updatedGrant.affected > 0)
            return { status: 'SUCCESS', message: 'Grant updated', payload: updatedGrant }

        return { status: 'ERROR_ROWS_NOT_UPDATED', message: 'Grant not updated', payload: null }

    }
}