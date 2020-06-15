import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneralResponse } from '../../common/response/GeneralResponse';
import { Agency } from '../../db/entities/business/Agency';

@Injectable()
export class CreateAgencyService {
    constructor(
        @InjectRepository(Agency) private agencyRepository: Repository<Agency>
    ) { }

    async create(agency: Agency): Promise<GeneralResponse> {
        try {

            const agencyExists = await this.agencyRepository.createQueryBuilder('agencyExists')
                .where([{ id: agency.id }, { code: agency.code }])
                .getOne();

            if (agencyExists)
                return { status: 'SUCCESS', message: 'Agency yet was created', payload: agencyExists }

            const newAgency = await this.agencyRepository.save(agency)

            if (newAgency)
                return { status: 'SUCCESS', message: 'Agencia created', payload: newAgency }

            return { status: 'ERR0R_SAVING_AGENCY', message: 'Agency was not created', payload: agencyExists }

        } catch (error) {
            return { status: 'ERR0R_SAVING_AGENCY', message: 'Agency was not created', payload: error }
        }

    }
}