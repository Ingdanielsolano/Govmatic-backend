import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FundingCategoryActivity } from 'src/db/entities/business/FundingCategoryActivity';


@Injectable()
export class CreateFundingCategoryActivityService {
    constructor(
        @InjectRepository(FundingCategoryActivity)
        private fundingCategoryActivityRepository: Repository<FundingCategoryActivity>
    ) { }

    async create(fundingCategoryActivity: FundingCategoryActivity): Promise<GeneralResponse> {

        const fundingCategoryActivityExists = await this.fundingCategoryActivityRepository.findOne({
            where: {
                code: fundingCategoryActivity.code
            }
        })

        if (fundingCategoryActivityExists)
            return {
                status: 'SUCCESS', message: 'Cfdas created', payload: fundingCategoryActivityExists
            }

        const newFundingCategoryActivity = await this.fundingCategoryActivityRepository.save(fundingCategoryActivity)

        return { status: 'SUCCESS', message: 'Cfdas created', payload: newFundingCategoryActivity }
    }
}