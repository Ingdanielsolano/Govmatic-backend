import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';
import * as moment from 'moment';
import { Grant } from 'src/db/entities/business/Grant';

@Injectable()
export class VerifyMustUpdateService {
    constructor(
        @InjectRepository(Grant)
        private granttunityRepository: Repository<Grant>
    ) { }

    async verify(): Promise<Boolean> {

        const today = moment().format('YYYY-MM-DD')
        const isThereOldsGrants = await this.granttunityRepository.findOne({
            lastUpdate: LessThan(today)
        })

        return isThereOldsGrants != undefined

    }
}