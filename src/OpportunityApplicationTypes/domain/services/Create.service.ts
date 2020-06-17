import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpportunityApplicantType } from 'src/db/entities/business/OpportunityApplicantTypes';
import { CreateApplicantTypeService } from 'src/ApplicantType/domain/services/Create.service';


@Injectable()
export class CreateOpportunityApplicationTypeService {
    constructor(
        @InjectRepository(OpportunityApplicantType)
        private opportunityApplicationTypeRepository: Repository<OpportunityApplicantType>,
        private readonly createApplicationType: CreateApplicantTypeService

    ) { }

    async create(opportunityApplicationType: OpportunityApplicantType): Promise<GeneralResponse> {

        const opportunityApplicationTypeExists = await this.opportunityApplicationTypeRepository.findOne({
            where: {
                opportunity: opportunityApplicationType.opportunity,
                applicantTypes: { code: opportunityApplicationType.applicantTypes.code }
            }
        })

        if (opportunityApplicationTypeExists)
            return {
                status: 'SUCCESS', message: 'OpportunityApplicationType yet exists', payload: opportunityApplicationTypeExists
            }

        const createdApplicationType = await this.createApplicationType.create(opportunityApplicationType.applicantTypes)

        if (createdApplicationType.status != 'SUCCESS')
            return createdApplicationType

        const newOpportunityApplicationType = await this.opportunityApplicationTypeRepository.save({
            opportunity: { id: opportunityApplicationType.opportunity.id },
            applicantTypes: { id: createdApplicationType.payload.id }
        })

        return { status: 'SUCCESS', message: 'Opportunity Application Type created', payload: newOpportunityApplicationType }
    }
}