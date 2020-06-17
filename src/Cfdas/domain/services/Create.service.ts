import { Injectable } from '@nestjs/common';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { InjectRepository } from '@nestjs/typeorm';
import { Cfdas } from '../../../db/entities/business/Cfdas';
import { Repository } from 'typeorm';


@Injectable()
export class CreateCfdaService {
    constructor(
        @InjectRepository(Cfdas)
        private cfdasRepository: Repository<Cfdas>
    ) { }

    async create(cfdas: Cfdas): Promise<GeneralResponse> {

        const cfdasExists = await this.cfdasRepository.findOne({ where: { opportunity: cfdas.opportunity, number: cfdas.number } })

        if (cfdasExists)
            return {
                status: 'SUCCESS', message: 'Cfdas created', payload: cfdasExists
            }        
        
        const newCfdas = await this.cfdasRepository.save(cfdas)

        return { status: 'SUCCESS', message: 'Cfdas created', payload: 'newCfdas' }
    }
}