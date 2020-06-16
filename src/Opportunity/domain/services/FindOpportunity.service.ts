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

    async find(code: Number): Promise<Opportunity> {


        // const isThereOldsGrants = await this.opportunityRepository.findOne({
        //     code
        // })

        // return isThereOldsGrants
        return
    }
}