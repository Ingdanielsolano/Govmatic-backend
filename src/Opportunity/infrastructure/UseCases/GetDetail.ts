import { Injectable } from "@nestjs/common";
import { GeneralResponse } from "../../../common/response/GeneralResponse";
import { FindOpportunityService } from "../../domain/services/FindOpportunity.service";
import * as moment from 'moment';
import { GetGrantDetail } from "../../../Scraping/infrastructure/GetGrantDetail";
import { UpdateDetailService } from "../../domain/services/UpdateDetail.service";
import { GrantDetail } from "src/Scraping/domain/ValueObjects/GrantDetail";


@Injectable()
export class GetOpportunityDetail {
    constructor(
        private readonly findOpportunity: FindOpportunityService,
        private readonly getGrantDetail: GetGrantDetail,
        private readonly updateDetail: UpdateDetailService

    ) { }

    async get(code: string): Promise<GeneralResponse> {
        const opportunity = await this.findOpportunity.find(+code)

        // if (opportunity && opportunity.lastUpdate) {
        //     const diff = moment(new Date()).diff(opportunity.lastUpdate.toString(), 'd')
        //     // if (diff < 1 && opportunity.synopsisDesc)
        //     //     return { status: 'SUCCESS', message: 'The grant has already been updated', payload: opportunity };

        //     const grantDetailResponse = await this.getGrantDetail.get(code)
        //     const grantDetail: GrantDetail = grantDetailResponse.payload.payload

        //     this.updateDetail.update(grantDetail, opportunity)

        //     return grantDetailResponse
        // }

        return { status: 'ERROR_GETTING_OPPORTUNITY', message: 'Can not get opportunity', payload: null }
    }
}