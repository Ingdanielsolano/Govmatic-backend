import { Injectable } from '@nestjs/common';
import { GeneralResponse } from 'src/common/response/GeneralResponse';

@Injectable()
export class GetGrantDetailService {
    constructor(        

    ) { }

    async getDetail(): Promise<GeneralResponse> {

        // const grantList = await this.get.get()
        // if (grantList.length < 1)
        //     return {
        //         status: 'ERROR_NOT_GRANTS_FOUND',
        //         message: `We can't get grants from goverment`,
        //         payload: undefined
        //     }

        // const compareService = await this.compareService.compare(grantList)

        // if (compareService.status != 'SUCCESS')
        //     return compareService

        return { message: 'Grants obtained', payload: 'grantList', status: 'SUCCESS' }
    }
}