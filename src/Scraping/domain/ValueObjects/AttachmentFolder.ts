import { Attachment } from "./Attachment"


export class AttachmentFolder {
    id: String
    opportunityId: String
    folderType: String
    folderName: String
    lastUpdatedDate: String
    synopsisAttachments: Attachment[]
}