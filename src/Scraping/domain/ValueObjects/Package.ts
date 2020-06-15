import { Agency } from "./Agency"

export class Package {
    id: String
    topportunityId: String
    familyId: String
    dialect: String
    opportunityNumber: String
    opportunityTitle: String
    openingDate: String
    closingDate: String
    owningAgencyCode: String
    agencyDetails: Agency
    topAgencyDetails: Agency
    contactInfo: String
    gracePeriod: String
    electronicRequired: String
    expectedApplicationCount: String
    openToApplicantType: String
    isMultiProject: String
    extension: String
    mimetype: String
    lastUpdate: String
    workspaceCompatibleFlag: String
    packageId: String
    openingDateStr: String
    closingDateStr: String
}