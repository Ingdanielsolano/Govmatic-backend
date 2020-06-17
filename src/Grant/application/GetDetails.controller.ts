import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { GeneralResponse } from 'src/common/response/GeneralResponse';
import { DetailDto } from '../infrastructure/dto/Detail';
import { GetGrantDetailUseCase } from '../infrastructure/UseCases/GetDetail';

@ApiTags('Grant')
@Controller('grant')
export class GetGrantController {
    constructor(
        private readonly getGrantDetailUseCase: GetGrantDetailUseCase,
    ) { }

    @Post('detail')
    @ApiOkResponse({ description: 'Grant detail', type: GeneralResponse })
    @ApiBadRequestResponse({ description: 'Error: Invalid data', type: GeneralResponse })
    async getDetail(@Body() detailDto: DetailDto) {

        const detail = await this.getGrantDetailUseCase.get(detailDto.code)
        return { status: 'SUCCESS', message: 'Process started', payload: detail }
    }
}