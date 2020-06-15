import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { DetailDto } from '../infrastructure/dto/Detail';
import { GeneralResponse } from '../../common/response/GeneralResponse';
import { GetOpportunityDetail } from '../infrastructure/UseCases/GetDetail';

@ApiTags('Opportunity')
@Controller('opportunity')
export class GetDeatailOpportunityController {
    constructor(
        private readonly getOpportunityDetail: GetOpportunityDetail,
    ) { }

    @Post('detail')
    @ApiOkResponse({ description: 'Opportunity detail', type: GeneralResponse })
    @ApiBadRequestResponse({ description: 'Error: Invalid data', type: GeneralResponse })
    async getDetail(@Body() detailDto: DetailDto) {

        const detail = await this.getOpportunityDetail.get(detailDto.code)
        return { status: 'SUCCESS', message: 'Process started', payload: detail }
    }
}