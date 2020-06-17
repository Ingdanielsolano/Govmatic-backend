import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpportunityCfdas } from '../../../db/entities/business/OpportunityCfdas';
import { CreateCfdaService } from '../../../Cfdas/domain/services/Create.service';


@Injectable()
export class CreateOpportunityCfdasService {
    constructor(
        @InjectRepository(OpportunityCfdas)
        private opportunityCfdasRepository: Repository<OpportunityCfdas>,
        private readonly createCfdas: CreateCfdaService

    ) { }

    async create(opportunityCfdas: OpportunityCfdas): Promise<GeneralResponse> {

        const opportunityCfdasExists = await this.opportunityCfdasRepository.findOne({
            where: {
                opportunity: opportunityCfdas.opportunity,
                cfdas: { number: opportunityCfdas.cfdas.number }
            }
        })

        if (opportunityCfdasExists)
            return {
                status: 'SUCCESS', message: 'Opportunity cfdas yet exists', payload: opportunityCfdasExists
            }

        const createdCfdas = await this.createCfdas.create({ ...opportunityCfdas.cfdas, opportunity: opportunityCfdas.opportunity })

        if (createdCfdas.status != 'SUCCESS')
            return createdCfdas

        const newOpportunityApplicationType = await this.opportunityCfdasRepository.save({
            opportunity: { id: opportunityCfdas.opportunity.id },
            cfdas: { id: createdCfdas.payload.id }
        })

        return { status: 'SUCCESS', message: 'Opportunity Application Type created', payload: 'newOpportunityApplicationType' }
    }
}