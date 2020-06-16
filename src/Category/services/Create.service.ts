import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneralResponse } from '../../common/response/GeneralResponse';
import { Agency } from '../../db/entities/business/Agency';
import { Category } from 'src/db/entities/business/Category';

@Injectable()
export class CreateCategoryervice {
    constructor(
        @InjectRepository(Category) private categoryRepository: Repository<Category>
    ) { }

    async create(category: Category): Promise<GeneralResponse> {
        try {

            const categoryExists = await this.categoryRepository.findOne({ where: { name: category.name } })

            if (categoryExists)
                return { status: 'SUCCESS', message: 'Category yet was created', payload: categoryExists }

            const newCategory = await this.categoryRepository.save(category)

            if (newCategory)
                return { status: 'SUCCESS', message: 'Category created', payload: newCategory }

            return { status: 'ERR0R_SAVING_CATEGORY', message: 'Category was not created', payload: categoryExists }

        } catch (error) {
            return { status: 'ERR0R_SAVING_CATEGORY', message: 'Category was not created', payload: error }
        }

    }
}