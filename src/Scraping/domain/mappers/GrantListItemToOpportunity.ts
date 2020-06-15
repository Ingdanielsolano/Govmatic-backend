import { Opportunity } from "src/db/entities/business/Opportunity";
import { Agency } from "../../../db/entities/business/Agency";
import { GrantListItem } from "../ValueObjects/GrantListItem";

export function grantListItemToOpportunity(grant: GrantListItem): Opportunity {
    let opportunity: Opportunity = new Opportunity();
    opportunity.code = this.id;
    opportunity.agency = new Agency();
    opportunity.agency.code = this.agencyCode
    opportunity.agency.name = this.agency
    opportunity.number = this.number;
    opportunity.title = this.title;
    opportunity.openDate = this.openDate;
    opportunity.postingDate = this.openDate;
    opportunity.closeDate = this.closeDate == '' ? null : this.closeDate;
    opportunity.status = this.oppStatus
    opportunity.docType = this.docType;
    opportunity.lastUpdate = new Date().toISOString();

    return opportunity;
}