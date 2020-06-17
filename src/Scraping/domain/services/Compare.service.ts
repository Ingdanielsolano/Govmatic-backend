import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { GrantListItem } from '../ValueObjects/GrantListItem';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MAX_ROWS } from 'src/common/config/environment';
import { Grant } from 'src/db/entities/business/Grant';
import { UpdateGrantService } from 'src/Grant/domain/services/Update.service';
import { CreateGrantService } from 'src/Grant/domain/services/Create.service';
import { DeleteOldsGrantsService } from 'src/Grant/domain/services/DeleteOlds.service';

@Injectable()
export class CompareService {
    constructor(
        @InjectRepository(Grant)
        private grantRepository: Repository<Grant>,
        private readonly createGrant: CreateGrantService,
        private readonly updateGrant: UpdateGrantService,
        private readonly deleteOldsGrants: DeleteOldsGrantsService,
    ) { }

    async compare(grants: GrantListItem[]): Promise<GeneralResponse> {

        let statistics = {
            created: 0,
            updated: 0,
            errorUpdate: [],
            errorCreate: []
        }

        for (let grant of grants) {
            const foundGrant = await this.grantRepository.findOne({
                where: { number: grant.id },
                relations: ['agency']
            })

            if (foundGrant) {

                const grantUpdated = await this.updateGrant.update(grant, foundGrant)
                if (grantUpdated.status != 'SUCCESS')
                    statistics.errorUpdate.push(grantUpdated)
                else
                    statistics.updated++

                continue
            }

            const grantCreated = await this.createGrant.create(grant)
            if (grantCreated.status != 'SUCCESS') {
                statistics.errorCreate.push(grantCreated)
                continue;
            } else
                statistics.created++
        }
        console.log(statistics);
        console.log(statistics.updated + statistics.created >= +MAX_ROWS)
        if (statistics.updated + statistics.created >= +MAX_ROWS)
            this.deleteOldsGrants.delete()

        return { status: 'SUCESS', message: 'Grants updated', payload: statistics }
    }
}