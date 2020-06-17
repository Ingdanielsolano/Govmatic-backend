import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { Package } from '../../../db/entities/business/Package';

@Injectable()
export class CreatePackageService {
    constructor(
        @InjectRepository(Package)
        private packageRepository: Repository<Package>
    ) { }

    async create(_package: Package): Promise<GeneralResponse> {
        try {

            const packageExists = await this.packageRepository.findOne({ where: { number: _package.number } })

            if (packageExists)
                return { status: 'SUCCESS', message: 'Package yet was created', payload: packageExists }

            _package.openingDate = _package.openingDate ? _package.openingDate.substring(0, 10) : ''
            _package.closingDate = _package.closingDate ? _package.closingDate.substring(0, 10) : ''

            delete _package.cfdas


            const newPackage = await this.packageRepository.save(_package)

            if (newPackage)
                return { status: 'SUCCESS', message: 'Package created', payload: newPackage }

            return { status: 'ERR0R_SAVING_PACKAGE', message: 'Package was not created', payload: packageExists }

        } catch (error) {
            return { status: 'ERR0R_SAVING_PACKAGE', message: 'Package was not created', payload: error }
        }

    }
}