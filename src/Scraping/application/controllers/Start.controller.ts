import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { StartScrapingService } from '../../domain/services/Start.service';
import { VerifyMustUpdateService } from '../../../Grant/domain/services/VerifyMustUpdate.service';
import { GetGrantList } from '../../infrastructure/GetGrantList';

@ApiTags('Scraping')
@Controller('scraping')
export class StartScrapingController {
    constructor(
        private readonly startService: StartScrapingService,
        private readonly getGrantList: GetGrantList,
        private readonly verifyMustUpdateService: VerifyMustUpdateService,
    ) { }

    @Get('start')
    @ApiOkResponse({ description: 'Process started', type: GeneralResponse })
    @ApiBadRequestResponse({ description: 'Error: Process cant be started', type: GeneralResponse })
    async startScraping(@Query('force') force: string) {

        if (force === 'true') {
            const grantList = await this.getGrantList.get()
            this.startService.start(grantList);
            return { status: 'SUCCESS', message: 'Process started', payload: { force } }
        }
        const mustUpdate = await this.verifyMustUpdateService.verify()

        if (!mustUpdate)
            return { status: 'SUCCESS', message: `It isn't necessary update` }

        const grantList = await this.getGrantList.get()
        this.startService.start(grantList);
        return { status: 'SUCCESS', message: 'Process started', payload: { mustUpdate } }
    }

}

