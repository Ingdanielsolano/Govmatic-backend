import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicantType } from '../../../db/entities/business/ApplicantTypes';


@Injectable()
export class FindApplicantTypeService {
    constructor(
        @InjectRepository(ApplicantType)
        private applicantTypeRepository: Repository<ApplicantType>
    ) { }

    async create(applicantType: ApplicantType): Promise<GeneralResponse> {

        const applicantTypeExists = await this.applicantTypeRepository.findOne({
            where: { code: applicantType.code }
        })

        if (applicantTypeExists)
            return {
                status: 'SUCCESS', message: 'Applicant type created', payload: applicantTypeExists
            }

        const newApplicantType = await this.applicantTypeRepository.save(applicantType)

        return { status: 'SUCCESS', message: 'Applicant type created', payload: newApplicantType }
    }
}