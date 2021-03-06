import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { CompareService } from './Compare.service';
import { GrantListItem } from '../ValueObjects/GrantListItem';

@Injectable()
export class StartScrapingService {
    constructor(
        private readonly compareService: CompareService
    ) { }

    async start(grantList: GrantListItem[]): Promise<GeneralResponse> {

        if (grantList.length < 1)
            return {
                status: 'ERROR_NOT_GRANTS_FOUND',
                message: `We can't get grants from goverment`,
                payload: undefined
            }

        const compareService = await this.compareService.compare(grantList)

        if (compareService.status != 'SUCCESS')
            return compareService

        return { message: 'Grants obtained', payload: grantList, status: 'SUCCESS' }
    }
}