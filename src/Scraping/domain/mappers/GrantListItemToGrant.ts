import { Agency } from "../../../db/entities/business/Agency";
import { GrantListItem } from "../ValueObjects/GrantListItem";
import { Grant } from "src/db/entities/business/Grant";
import { Opportunity } from "src/db/entities/business/Opportunity";

export function grantListItemToGrant(grantListItem: GrantListItem): { grant: Grant, opportunity: Opportunity } {


    let grant = new Grant()
    grant.number = grantListItem.number;
    grant.title = grantListItem.title;
    grant.status = grantListItem.oppStatus;
    grant.agency = new Agency();
    grant.agency.code = grantListItem.agencyCode
    grant.agency.name = grantListItem.agency
    grant.lastUpdate = new Date().toISOString()

    let opportunity = new Opportunity();
    opportunity.number = grantListItem.number;
    opportunity.title = grantListItem.title;
    opportunity.postingDate = grantListItem.openDate;
    opportunity.grant = new Grant();

    return { grant, opportunity };
}