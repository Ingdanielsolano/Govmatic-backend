import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { Attachment } from 'src/db/entities/business/Attachment';
import { GrantPackage } from 'src/db/entities/business/GrantPackage';
import { CreatePackageService } from 'src/Package/domain/services/Create.service';

@Injectable()
export class CreateGrantPackageService {
    constructor(
        @InjectRepository(GrantPackage)
        private grantPackageRepository: Repository<GrantPackage>,
        private readonly createPackageService: CreatePackageService,
    ) { }

    async create(grantPackage: GrantPackage): Promise<GeneralResponse> {
        try {
            
            const packageExists = await this.grantPackageRepository.findOne({ where: { grant: { id: grantPackage.id }, package: { number: grantPackage.package.number } } })
            


            if (packageExists)
                return { status: 'SUCCESS', message: 'Package yet was created', payload: packageExists }

            const newPackage = await this.createPackageService.create(grantPackage.package)
            
            if (newPackage.status != 'SUCCESS')
                return newPackage

            const newGrantPackage = await this.grantPackageRepository.save({ ...grantPackage, package: newPackage.payload.id })

            if (newGrantPackage)
                return { status: 'SUCCESS', message: 'Grant package created', payload: newGrantPackage }

            return { status: 'ERR0R_SAVING_GRANT_PACKAGE', message: 'Grant package was not created', payload: packageExists }

        } catch (error) {
            return { status: 'ERR0R_SAVING_GRANT_PACKAGE', message: 'Grant package was not created', payload: error }
        }

    }
}