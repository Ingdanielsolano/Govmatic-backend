import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Opportunity } from '../../../db/entities/business/Opportunity';
import { Repository } from 'typeorm';
import { GrantDetail } from '../../../Scraping/domain/ValueObjects/GrantDetail';
import { grantDetailToGrant } from '../../../Scraping/domain/mappers/GrantDetailToGrant';
import { CreateCfdaService } from '../../../Cfdas/domain/services/Create.service';
import { CreateApplicantTypeService } from '../../../ApplicantType/domain/services/Create.service';
import { CreateOpportunityApplicationTypeService } from '../../../OpportunityApplicationTypes/domain/services/Create.service';
import { ApplicantType } from '../../../db/entities/business/ApplicantTypes';
import { CreateFundingCategoryActivityService } from '../../../FundingCategoryActivity/domain/services/Create.service';
import { FundingCategoryActivity } from '../../../db/entities/business/FundingCategoryActivity';
import { CreateOpportunityFundingCategoryActivityService } from '../../../OpportunityFundingCategoryActivity/domain/services/Create.service';
import { FundingInstruments } from '../../../Scraping/domain/ValueObjects/FundingInstruments';
import { CreateFundingInstrumentsService } from '../../../FundingInstruments/domain/services/Create.service';
import { CreateOpportunityFundingInstrumentService } from '../../../OpportunityFundingInstruments/domain/services/Create.service';
import { UpdateAgencyService } from 'src/Agency/services/Update.service';
import { CreateCategoryervice } from 'src/Category/services/Create.service';


@Injectable()
export class UpdateDetailService {
    constructor(
        @InjectRepository(Opportunity)
        private opportunityRepository: Repository<Opportunity>,
        private readonly createCfdas: CreateCfdaService,
        private readonly createApplicantType: CreateApplicantTypeService,
        private readonly createOpportunityApplicationType: CreateOpportunityApplicationTypeService,
        private readonly createFundingCategoryActivityService: CreateFundingCategoryActivityService,
        private readonly createOpportunityFundingCategoryActivityService: CreateOpportunityFundingCategoryActivityService,
        private readonly createFundingInstrumentsService: CreateFundingInstrumentsService,
        private readonly updateAgencyService: UpdateAgencyService,
        private readonly createOpportunityFundingInstrumentsService: CreateOpportunityFundingInstrumentService,
        private readonly createCategoryervice: CreateCategoryervice
    ) { }

    async update(grant: GrantDetail, foundOpportunity: Opportunity): Promise<GeneralResponse> {
        // let { opportunity, applicantTypes, fundingCategoryActivities, fundingInstruments, cfdas } = grantDetailToOpportunity(grant)

        // const newCategory = await this.createCategoryervice.create(opportunity.category)
        // if (newCategory.status != 'SUCCESS')
        //     return newCategory

        // opportunity.category = newCategory.payload

        // const updatedAgency = await this.updateAgencyService.update(opportunity.agency)

        // console.log(updatedAgency)

        // opportunity.agency = updatedAgency.payload

        // const updatedOpportunity = await this.opportunityRepository.update(foundOpportunity, opportunity)

        // for (const cfda of cfdas) {
        //     cfda.opportunity.id = foundOpportunity.id
        //     await this.createCfdas.create(cfda)
        // }

        // let applicants: ApplicantType[] = []
        // for (const applicantType of applicantTypes) {
        //     const newApplicantType = await this.createApplicantType.create(applicantType)
        //     if (newApplicantType.status == 'SUCCESS')
        //         applicants.push(newApplicantType.payload)
        // }

        // for (const applicant of applicants)
        //     await this.createOpportunityApplicationType.create({
        //         opportunity: foundOpportunity,
        //         applicantTypes: applicant,
        //         id: null
        //     })

        // let newFundingCategoryActivities: FundingCategoryActivity[] = []
        // for (const fundingCategoryActivity of fundingCategoryActivities) {
        //     const newFundingCategoryActivity = await this.createFundingCategoryActivityService.create(fundingCategoryActivity)
        //     if (newFundingCategoryActivity.status == 'SUCCESS')
        //         newFundingCategoryActivities.push(newFundingCategoryActivity.payload)
        // }

        // for (const fundingCategoryActivity of newFundingCategoryActivities) {
        //     await this.createOpportunityFundingCategoryActivityService.create({
        //         opportunity: foundOpportunity,
        //         fundingCategoryActivity: fundingCategoryActivity,
        //         id: null
        //     })
        // }

        // let newFundingInstruments: FundingInstruments[] = []
        // for (const fundingInstrument of fundingInstruments) {
        //     const newfundingInstrument = await this.createFundingInstrumentsService.create(fundingInstrument)
        //     if (newfundingInstrument.status == 'SUCCESS')
        //         newFundingInstruments.push(newfundingInstrument.payload)
        // }

        // for (const fundingInstrument of newFundingCategoryActivities) {
        //     await this.createOpportunityFundingInstrumentsService.create({
        //         opportunity: foundOpportunity,
        //         fundingInstrument: fundingInstrument,
        //         id: null
        //     })
        // }

        // if (updatedOpportunity.affected > 0)
        //     return { status: 'SUCCESS', message: 'Grant updated', payload: updatedOpportunity }

        return { status: 'ERROR_ROWS_NOT_UPDATED', message: 'Grant not updated', payload: null }

    }
}