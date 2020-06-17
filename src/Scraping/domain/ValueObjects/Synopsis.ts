import { Agency } from "./Agency"
import { ApplicationType } from "./ApplicationType"
import { FundingInstruments } from "./FundingInstruments"
import { FundingActivity } from "./FundingActivity"

export class Synopsis {
    opportunityId: String
    version: String
    agencyCode: String
    agencyName: String
    agencyPhone: String
    agencyAddressDesc: String
    agencyDetails: Agency
    topAgencyDetails: Agency
    agencyContactPhone: String
    agencyContactName: String
    agencyContactDesc: String
    agencyContactEmail: String
    agencyContactEmailDesc: String
    synopsisDesc: String
    responseDate: String
    responseDateDesc: String
    fundingDescLinkUrl: String
    fundingDescLinkDesc: String
    postingDate: String
    archiveDate: String
    costSharing: String
    numberOfAwards: String
    estimatedFunding: String
    estimatedFundingFormatted: String
    awardCeiling: String
    awardCeilingFormatted: String
    awardFloor: String
    awardFloorFormatted: String
    applicantEligibilityDesc: String
    createTimeStamp: String
    createdDate: String
    lastUpdatedDate: String
    applicantTypes: ApplicationType[]
    fundingInstruments: FundingInstruments[]
    fundingActivityCategories: FundingActivity[]
    responseDateStr: String
    postingDateStr: String
    archiveDateStr: String
    createTimeStampStr: String
    opportunityNumber: String;
    opportunityTitle: String
}