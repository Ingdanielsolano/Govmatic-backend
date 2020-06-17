import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grant } from '../../../db/entities/business/Grant';
import { Repository, LessThan } from 'typeorm';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import * as moment from 'moment';

@Injectable()
export class DeleteOldsGrantsService {
    constructor(
        @InjectRepository(Grant)
        private grantRepository: Repository<Grant>
    ) { }

    async delete(): Promise<GeneralResponse> {

        const today = moment().format('YYYY-MM-DD')
        const oldGrantsDeleted = await this.grantRepository.delete({
            lastUpdate: LessThan(today)
        })

        return { status: 'ERROR_ROWS_NOT_UPDATED', message: 'Grant not updated', payload: oldGrantsDeleted }

    }
}