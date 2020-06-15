import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository, LessThan } from 'typeorm';
import * as moment from 'moment';


@Injectable()
export class DeleteOldsOpportunitiesService {
    constructor(
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>
    ) { }

    async delete(): Promise<GeneralResponse> {

        const today = moment().format('YYYY-MM-DD')
        const oldOpportunitiesDeleted = await this.opportunityRepository.delete({ lastUpdate: LessThan(today) })

        return { status: 'ERROR_ROWS_NOT_UPDATED', message: 'Grant not updated', payload: oldOpportunitiesDeleted }

    }
}