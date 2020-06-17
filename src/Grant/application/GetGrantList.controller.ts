import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { GeneralResponse } from '../../common/response/GeneralResponse';
import { GetListGrantService } from '../domain/services/GetList.service';


@ApiTags('Grant')
@Controller('grant')
export class GetGrantListController {
    constructor(
        private readonly getListGrantService: GetListGrantService,
    ) { }

    @Get('list')
    @ApiOkResponse({ description: 'Grant detail', type: GeneralResponse })
    @ApiBadRequestResponse({ description: 'Error: Invalid data', type: GeneralResponse })
    async getList(@Query('page') page: number) {
        return await this.getListGrantService.get(page)
    }
}