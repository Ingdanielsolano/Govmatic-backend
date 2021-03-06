import { Opportunity } from "../../../db/entities/business/Opportunity";
import { Cfdas } from "./Cfdas";
import { Package } from "./Package";
import { Category } from "./Category";
import { Synopsis } from "./Synopsis";
import { Agency } from "./Agency";
import { AttachmentFolder } from "./AttachmentFolder";
import { OpportunityHistory } from "./OpportunityHistory";


export class GrantDetail {
    id: String;
    revision: String;
    opportunityNumber: String;
    opportunityTitle: String;
    owningAgencyCode: String;
    opportunityCategory: Category
    synopsis: Synopsis
    opportunityHistoryDetails: OpportunityHistory[]
    agencyDetails: Agency
    topAgencyDetails: Agency
    cfdas: Cfdas[]
    opportunityPkgs: Package[]
    closedOpportunityPkgs: []
    originalDueDate: String
    synopsisModifiedFields: []
    forecastModifiedFields: []
    errorMessages: []
    synPostDateInPast: boolean
    docType: String
    forecastHistCount: 0
    synopsisHistCount: String
    assistCompatible: String
    assistURL: String
    relatedOpps: []
    draftMode: String
    synopsisAttachmentFolders: any[]
}