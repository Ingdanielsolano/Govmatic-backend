import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneralResponse } from '../../common/response/GeneralResponse';
import { Agency } from '../../db/entities/business/Agency';

@Injectable()
export class UpdateAgencyService {
    constructor(
        @InjectRepository(Agency) private agencyRepository: Repository<Agency>
    ) { }

    async update(agency: Agency): Promise<GeneralResponse> {
        try {

            const savedAgency = await this.agencyRepository.findOne({ where: [{ id: agency.id }, { code: agency.code }] })

            const newAgency = await this.agencyRepository.update(savedAgency, agency)

            if (newAgency)
                return { status: 'SUCCESS', message: 'Agencia created', payload: savedAgency }

            return { status: 'ERR0R_SAVING_AGENCY', message: 'Agency was not updated', payload: savedAgency }

        } catch (error) {
            return { status: 'ERR0R_SAVING_AGENCY', message: 'Agency was not created', payload: error }
        }

    }
}