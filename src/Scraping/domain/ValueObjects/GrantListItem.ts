import { Opportunity } from "../../../db/entities/business/Opportunity";
import { Agency } from "../../../db/entities/business/Agency";

export class GrantListItem {
    id: Number;
    number: String;
    title: String;
    agencyCode: String;
    agency: String;
    openDate: String;
    closeDate: String;
    oppStatus: String;
    docType: String;
    cfdaList: Number[]

}