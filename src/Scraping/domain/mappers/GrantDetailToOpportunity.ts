import { Opportunity } from "src/db/entities/business/Opportunity";
import { Agency } from "../../../db/entities/business/Agency";
import { Category } from "../../../db/entities/business/Category";
import { Cfdas } from "../../../db/entities/business/Cfdas";
import { ApplicantType } from "../../../db/entities/business/ApplicantTypes";
import { FundingCategoryActivity } from "../../../db/entities/business/FundingCategoryActivity";
import { FundingInstrument } from "../../../db/entities/business/FundingInstrument";
import { GrantDetail } from "../ValueObjects/GrantDetail";

export function grantDetailToOpportunity(grant: GrantDetail): {
    opportunity: Opportunity,
    applicantTypes: ApplicantType[],
    fundingCategoryActivities: FundingCategoryActivity[],
    fundingInstruments: FundingInstrument[],
    cfdas: Cfdas[]
} {

    let opportunity: Opportunity = new Opportunity();

    opportunity.agency = new Agency()
    opportunity.agency.code = grant.agencyDetails.agencyCode
    opportunity.agency.addressDesc = grant.synopsis.agencyAddressDesc
    opportunity.agency.contactEmail = grant.synopsis.agencyContactEmail
    opportunity.agency.contactEmailDesc = grant.synopsis.agencyContactDesc
    opportunity.agency.contactName = grant.synopsis.agencyContactName
    opportunity.agency.name = grant.synopsis.agencyName

    opportunity.costSharing = grant.synopsis.costSharing ? 'true' : 'false'
    opportunity.docType = grant.docType
    opportunity.estimatedFunding = grant.synopsis.estimatedFunding
    opportunity.fundingDescLinkDesc = grant.synopsis.fundingDescLinkDesc
    opportunity.fundingDescLinkUrl = grant.synopsis.fundingDescLinkUrl
    opportunity.numberOfAwards = grant.synopsis.numberOfAwards
    opportunity.responseDate = grant.synopsis.responseDate
    opportunity.synopsisDesc = grant.synopsis.synopsisDesc
    opportunity.number = grant.opportunityNumber
    opportunity.fundingDescLinkDesc = grant.synopsis.fundingDescLinkDesc
    opportunity.archiveDate = grant.synopsis.archiveDate
    opportunity.awardCeiling = grant.synopsis.awardCeiling
    opportunity.awardFloor = grant.synopsis.awardFloor
    opportunity.applicationElegibilityDesc = grant.synopsis.applicantEligibilityDesc
    
    opportunity.category = new Category()
    opportunity.category.name = grant.opportunityCategory.category
    opportunity.category.description = grant.opportunityCategory.description

    let cfdas: Cfdas[] = []
    for (const cfda of grant.cfdas) {
        let newCfdasDb = new Cfdas()
        newCfdasDb.number = cfda.cfdaNumber
        newCfdasDb.programTitle = cfda.programTitle
        cfdas.push(newCfdasDb)
    }

    let applicantTypes: ApplicantType[] = []

    for (const applicantType of grant.synopsis.applicantTypes) {
        let newApplicationTypeDb = new ApplicantType()
        newApplicationTypeDb.code = applicantType.id
        newApplicationTypeDb.description = applicantType.description
        applicantTypes.push(newApplicationTypeDb)
    }

    let fundingCategoryActivities: FundingCategoryActivity[] = []

    for (const fundingActivityCategories of grant.synopsis.fundingActivityCategories) {
        let newFundingCategory = new FundingCategoryActivity()
        newFundingCategory.code = fundingActivityCategories.id
        newFundingCategory.description = fundingActivityCategories.description
        fundingCategoryActivities.push(newFundingCategory)
    }

    let fundingInstruments: FundingInstrument[] = []

    for (const fundingInstrument of grant.synopsis.fundingInstruments) {
        let newFundingCategory = new FundingInstrument()
        newFundingCategory.code = fundingInstrument.id
        newFundingCategory.description = fundingInstrument.description
        fundingInstruments.push(newFundingCategory)
    }


    return { opportunity, applicantTypes, fundingCategoryActivities, fundingInstruments, cfdas };

}