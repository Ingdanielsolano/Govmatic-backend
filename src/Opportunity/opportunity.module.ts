import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opportunity } from 'src/db/entities/business/Opportunity';
import { GetDeatailOpportunityController } from './application/GetDetails.controller';
import { FindOpportunityService } from './domain/services/FindOpportunity.service';
import { GetGrantDetail } from '../Scraping/infrastructure/GetGrantDetail';
import { Downloader } from '../Scraping/infrastructure/Downloader';
import { GetOpportunityDetail } from './infrastructure/UseCases/GetDetail';
import { UpdateDetailService } from './domain/services/UpdateDetail.service';
import { Cfdas } from '../db/entities/business/Cfdas';



@Module({
    imports: [TypeOrmModule.forFeature([Opportunity, Cfdas])],
    controllers: [GetDeatailOpportunityController],
    providers: [
        FindOpportunityService,
        GetGrantDetail,
        Downloader,
        GetOpportunityDetail,
        UpdateDetailService
    ]
})
export class OpportunityModule { }
