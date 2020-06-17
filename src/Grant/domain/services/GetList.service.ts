import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grant } from '../../../db/entities/business/Grant';
import { GeneralResponse } from 'src/common/response/GeneralResponse';


@Injectable()
export class GetListGrantService {
    constructor(
        @InjectRepository(Grant)
        private grantRepository: Repository<Grant>
    ) { }

    async get(page: number): Promise<GeneralResponse> {
        let list: Grant[] = await this.grantRepository
            .createQueryBuilder('grant')
            .select('grant')
            .innerJoinAndSelect('grant.opportunities', 'opportunities')
            .innerJoinAndSelect('grant.agency', 'agency')
            .skip(20 * (page - 1))
            .take(20)
            .orderBy('opportunities.postingDate','DESC')
            .getMany();

        console.log(list);

        return { message: 'List generated', status: 'SUCCESS', payload: list }
    }
}