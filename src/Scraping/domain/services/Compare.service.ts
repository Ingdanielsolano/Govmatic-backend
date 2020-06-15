import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { GrantListItem } from '../ValueObjects/GrantListItem';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository } from 'typeorm';
import { CreateOpportunityService } from '../../../Opportunity/domain/services/Create.service';
import { UpdateOpportunityService } from '../../../Opportunity/domain/services/Update.service';
import { MAX_ROWS } from 'src/common/config/environment';
import { DeleteOldsOpportunitiesService } from '../../../Opportunity/domain/services/DeleteOlds.service';

@Injectable()
export class CompareService {
    constructor(
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>,
        private readonly createOpportunity: CreateOpportunityService,
        private readonly updateOpportunity: UpdateOpportunityService,
        private readonly deleteOldOpportunities: DeleteOldsOpportunitiesService,
    ) { }

    async compare(grants: GrantListItem[]): Promise<GeneralResponse> {

        let statistics = {
            created: 0,
            updated: 0,
            errorUpdate: [],
            errorCreate: []
        }

        for (let grant of grants) {
            const opportunity = await this.opportunityRepository.findOne({
                where: { number: grant.number }
            })

            if (opportunity) {

                const opportunityUpdated = await this.updateOpportunity.update(grant, opportunity)
                if (opportunityUpdated.status != 'SUCCESS')
                    statistics.errorUpdate.push(opportunityUpdated)
                else
                    statistics.updated++

                continue
            }

            const opportunityCreated = await this.createOpportunity.create(grant)
            if (opportunityCreated.status != 'SUCCESS') {
                statistics.errorCreate.push(opportunityCreated)
                continue;
            } else
                statistics.created++
        }
        console.log(statistics);
        console.log(statistics.updated + statistics.created >= +MAX_ROWS)
        if (statistics.updated + statistics.created >= +MAX_ROWS)
            this.deleteOldOpportunities.delete()

        return { status: 'SUCESS', message: 'Grants updated', payload: statistics }
    }
}