import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpportunityApplicantType } from 'src/db/entities/business/OpportunityApplicantTypes';


@Injectable()
export class CreateOpportunityApplicationTypeService {
    constructor(
        @InjectRepository(OpportunityApplicantType)
        private opportunityApplicationTypeRepository: Repository<OpportunityApplicantType>
    ) { }

    async create(opportunityApplicationType: OpportunityApplicantType): Promise<GeneralResponse> {

        const opportunityApplicationTypeExists = await this.opportunityApplicationTypeRepository.findOne({ where: { opportunity: opportunityApplicationType.opportunity, applicantTypes: opportunityApplicationType.applicantTypes } })

        if (opportunityApplicationTypeExists)
            return {
                status: 'SUCCESS', message: 'OpportunityApplicationType created', payload: opportunityApplicationTypeExists
            }

        const newOpportunityApplicationType = await this.opportunityApplicationTypeRepository.save(opportunityApplicationType)

        return { status: 'SUCCESS', message: 'OpportunityApplicationType created', payload: newOpportunityApplicationType }
    }
}