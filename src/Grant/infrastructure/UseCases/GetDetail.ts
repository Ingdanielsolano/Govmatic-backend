import { Injectable } from "@nestjs/common";
import { GeneralResponse } from "../../../common/response/GeneralResponse";
import * as moment from 'moment';
import { GrantDetail } from "../../../Scraping/domain/ValueObjects/GrantDetail";
import { FindGrantService } from "../../../Grant/domain/services/Find.service";
import { UpdateDetailGrantService } from "../../../Grant/domain/services/UpdateDetail.service";
import { GetGrantDetail } from "../../../Scraping/infrastructure/GetGrantDetail";


@Injectable()
export class GetGrantDetailUseCase {
    constructor(
        private readonly findGrant: FindGrantService,
        private readonly getGrantDetail: GetGrantDetail,
        private readonly updateDetail: UpdateDetailGrantService

    ) { }

    async get(code: string): Promise<GeneralResponse> {
        const foundGrant = await this.findGrant.find(+code)

        if (foundGrant && foundGrant.lastUpdate) {
            const diff = moment(new Date()).diff(foundGrant.lastUpdate.toString(), 'd')
            
            const grantDetailResponse = await this.getGrantDetail.get(code)

            const grantDetail: GrantDetail = grantDetailResponse.payload

            await this.updateDetail.update(grantDetail, foundGrant)

            return grantDetailResponse
        }

        return { status: 'ERROR_GETTING_OPPORTUNITY', message: 'Can not get opportunity', payload: null }
    }
}