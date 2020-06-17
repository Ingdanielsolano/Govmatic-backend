import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository } from 'typeorm';


@Injectable()
export class FindOpportunityService {
    constructor(
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>
    ) { }

    async find(code: String): Promise<Opportunity> {


        const foundOpportunity = await this.opportunityRepository.findOne({
            where: {
                number: code
            }
        })

        return foundOpportunity
    }
}