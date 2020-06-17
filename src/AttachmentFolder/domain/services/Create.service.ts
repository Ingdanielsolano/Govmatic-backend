import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneralResponse } from '../../../common/response/GeneralResponse';
import { Category } from 'src/db/entities/business/Category';
import { AttachmentFolder } from 'src/db/entities/business/Attachment_folder';

@Injectable()
export class CreateAttachmentFolderService {
    constructor(
        @InjectRepository(AttachmentFolder)
        private attachmentFolderRepository: Repository<AttachmentFolder>
    ) { }

    async create(attachmentFolder: AttachmentFolder): Promise<GeneralResponse> {
        try {

            const attachmentFolderExists = await this.attachmentFolderRepository.findOne({ where: { number: attachmentFolder.number } })

            if (attachmentFolderExists)
                return { status: 'SUCCESS', message: 'Attachment folder yet was created', payload: attachmentFolderExists }

            const newAttachmentFolder = await this.attachmentFolderRepository.save(attachmentFolder)

            if (newAttachmentFolder)
                return { status: 'SUCCESS', message: 'Attachment folder created', payload: newAttachmentFolder }

            return { status: 'ERR0R_SAVING_ATTACHMENT_FOLDER', message: 'Attachment folder was not created', payload: attachmentFolderExists }

        } catch (error) {
            return { status: 'ERR0R_SAVING_ATTACHMENT_FOLDER', message: 'Attachment folder was not created', payload: error }
        }

    }
}