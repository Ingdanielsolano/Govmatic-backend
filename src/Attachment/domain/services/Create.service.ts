import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeneralResponse } from '../../../common/response/GeneralResponse';

import { Attachment } from '../../../db/entities/business/Attachment';
import { CreateAttachmentFolderService } from '../../../AttachmentFolder/domain/services/Create.service';

@Injectable()
export class CreateAttachmentService {
    constructor(
        @InjectRepository(Attachment)
        private attachmentRepository: Repository<Attachment>,
        private readonly createAttachmentFolderService: CreateAttachmentFolderService,
    ) { }

    async create(attachment: Attachment): Promise<GeneralResponse> {
        try {

            const attachmentExists = await this.attachmentRepository.findOne({ where: { number: attachment.number } })

            if (attachmentExists)
                return { status: 'SUCCESS', message: 'Attachment  yet was created', payload: attachmentExists }

            const attachmentFolder = await this.createAttachmentFolderService.create(attachment.attachmentFolder)

            if (attachmentFolder.status != 'SUCCESS')
                return attachmentFolder

            const newAttachment = await this.attachmentRepository.save({ ...attachment, attachmentFolder: { id: attachmentFolder.payload.id } })

            if (newAttachment)
                return { status: 'SUCCESS', message: 'Attachment  created', payload: newAttachment }

            return { status: 'ERR0R_SAVING_ATTACHMENT', message: 'Attachment was not created', payload: attachmentExists }

        } catch (error) {
            return { status: 'ERR0R_SAVING_ATTACHMENT', message: 'Attachment was not created', payload: error }
        }

    }
}