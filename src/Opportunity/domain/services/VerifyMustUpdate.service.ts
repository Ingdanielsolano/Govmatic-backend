import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository, LessThan } from 'typeorm';
import * as moment from 'moment';

@Injectable()
export class VerifyMustUpdateService {
    constructor(
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>
    ) { }

    async verify(): Promise<Boolean> {

        const today = moment().format('YYYY-MM-DD')
        const isThereOldsGrants = await this.opportunityRepository.findOne({
            lastUpdate: LessThan(today)
        })

        return isThereOldsGrants != undefined

    }
}