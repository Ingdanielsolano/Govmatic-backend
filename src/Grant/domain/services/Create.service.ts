import { Injectable } from '@nestjs/common';
import { Grant } from '../../../db/entities/business/Grant';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgencyService } from '../../../Agency/services/Create.service';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { GrantListItem } from '../../../Scraping/domain/ValueObjects/GrantListItem';
import { grantListItemToGrant } from '../../../Scraping/domain/mappers/GrantListItemToGrant';
import { Opportunity } from '../../../db/entities/business/Opportunity';

@Injectable()
export class CreateGrantService {
    constructor(
        @InjectRepository(Grant)
        private grantRepository: Repository<Grant>,
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>,
        private readonly createAgency: CreateAgencyService
    ) { }

    async create(grantListItem: GrantListItem): Promise<GeneralResponse> {
        let { grant, opportunity } = grantListItemToGrant(grantListItem)
        
        const agencyAvaliable = await this.createAgency.create(grant.agency);

        if (agencyAvaliable.status != 'SUCCESS')
            return agencyAvaliable

        grant.agency.id = agencyAvaliable.payload.id
        const newGrant = await this.grantRepository.save(grant)

        opportunity.grant.id = newGrant.id
        const newOpportunity = await this.opportunityRepository.save(opportunity)


        return { status: 'SUCCESS', message: 'Grant created', payload: newGrant }

    }
}