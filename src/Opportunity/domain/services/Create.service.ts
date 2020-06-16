import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository } from 'typeorm';
import { GrantListItem } from '../../../Scraping/domain/ValueObjects/GrantListItem';
// import { grantListItemToOpportunity } from '../../../Scraping/domain/mappers/GrantListItemToGrant';
import { CreateAgencyService } from '../../../Agency/services/Create.service';

@Injectable()
export class CreateOpportunityService {
    constructor(
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>,
        private readonly createAgency: CreateAgencyService
    ) { }

    async create(grant: GrantListItem): Promise<GeneralResponse> {
        // let opportunity = grantListItemToOpportunity(grant)

        // const agencyAvaliable = await this.createAgency.create(opportunity.agency)

        // if (agencyAvaliable.status != 'SUCCESS')
        //     return agencyAvaliable

        // opportunity.agency.id = agencyAvaliable.payload.id
        // const newOpportunity = await this.opportunityRepository.save(opportunity)

        // return { status: 'SUCCESS', message: 'Grant created', payload: newOpportunity }
        return null
    }
}