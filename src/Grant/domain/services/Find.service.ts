import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grant } from '../../../db/entities/business/Grant';


@Injectable()
export class FindGrantService {
    constructor(
        @InjectRepository(Grant)
        private grantRepository: Repository<Grant>
    ) { }

    async find(number: Number): Promise<Grant> {

        const foundGrant = await this.grantRepository.findOne({
            where: { number: number }
        })

        return foundGrant
    }
}