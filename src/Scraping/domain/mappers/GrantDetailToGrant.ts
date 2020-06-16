import { Opportunity } from "src/db/entities/business/Opportunity";
import { Agency } from "../../../db/entities/business/Agency";
import { Category } from "../../../db/entities/business/Category";
import { Cfdas } from "../../../db/entities/business/Cfdas";
import { ApplicantType } from "../../../db/entities/business/ApplicantTypes";
import { FundingCategoryActivity } from "../../../db/entities/business/FundingCategoryActivity";
import { FundingInstrument } from "../../../db/entities/business/FundingInstrument";
import { GrantDetail } from "../ValueObjects/GrantDetail";
import { Package } from "src/db/entities/business/Package";
import { Grant } from "src/db/entities/business/Grant";
import { AttachmentFolder } from "src/db/entities/business/Attachment_folder";
import { Attachment } from "src/db/entities/business/Attachment";

export function grantDetailToGrant(grantDetail: GrantDetail): {
    opportunity: Opportunity,
    grant: Grant,
    applicantTypes: ApplicantType[],
    fundingCategoryActivities: FundingCategoryActivity[],
    fundingInstruments: FundingInstrument[],
    cfdas: Cfdas[]
} {

    let grant = new Grant();
    grant.agency = new Agency();
    grant.agency.code = grantDetail.topAgencyDetails.code
    grant.agency.image = grantDetail.topAgencyDetails.agencyCode
    grant.agency.name = grantDetail.topAgencyDetails.agencyName

    let attachmentFolder: AttachmentFolder[] = []
    for (const folder of grantDetail.synopsisAttachmentFolders) {
        let newFolder = new AttachmentFolder()
        newFolder.number = folder.id
        newFolder.type = folder.folderType
        newFolder.name = folder.folderName
        newFolder.lastUpdatedDate = folder.lastUpdatedDate
        newFolder.attachments = []
        for (const file of folder.synopsisAttachments) {
            let newFile = new Attachment()
            newFile.number = file.id
            newFile.name = file.fileName
            newFile.description = file.fileDescription
            newFolder.attachments.push(newFile)
            grant.attachments.push(newFile)
        }
    }

    let cfdas: Cfdas[] = []
    for (const cfda of grantDetail.cfdas) {

        if (!cfda.cfdaNumber || !cfda.cfdaNumber)
            continue

        let newCfdasDb = new Cfdas()
        newCfdasDb.opportunity = new Opportunity()
        newCfdasDb.number = cfda.cfdaNumber
        newCfdasDb.programTitle = cfda.programTitle
        cfdas.push(newCfdasDb)
    }

    let opportunity: Opportunity = new Opportunity();

    // opportunity.agency = new Agency()
    // opportunity.agency.code = grant.agencyDetails.agencyCode
    // opportunity.agency.addressDesc = grant.synopsis.agencyAddressDesc
    // opportunity.agency.contactEmail = grant.synopsis.agencyContactEmail
    // opportunity.agency.contactEmailDesc = grant.synopsis.agencyContactDesc
    // opportunity.agency.contactName = grant.synopsis.agencyContactName
    // opportunity.agency.name = grant.synopsis.agencyName

    // opportunity.costSharing = grant.synopsis.costSharing ? 'true' : 'false'
    // opportunity.docType = grant.docType
    // opportunity.estimatedFunding = grant.synopsis.estimatedFunding
    // opportunity.fundingDescLinkDesc = grant.synopsis.fundingDescLinkDesc
    // opportunity.fundingDescLinkUrl = grant.synopsis.fundingDescLinkUrl
    // opportunity.numberOfAwards = grant.synopsis.numberOfAwards
    // opportunity.responseDate = grant.synopsis.responseDate
    // opportunity.synopsisDesc = grant.synopsis.synopsisDesc
    // opportunity.number = grant.opportunityNumber
    // opportunity.fundingDescLinkDesc = grant.synopsis.fundingDescLinkDesc
    // opportunity.archiveDate = grant.synopsis.archiveDate
    // opportunity.awardCeiling = grant.synopsis.awardCeiling
    // opportunity.awardFloor = grant.synopsis.awardFloor
    // opportunity.applicationElegibilityDesc = grant.synopsis.applicantEligibilityDesc

    // opportunity.category = new Category()
    // opportunity.category.name = grant.opportunityCategory.category
    // opportunity.category.description = grant.opportunityCategory.description



    // let applicantTypes: ApplicantType[] = []

    // for (const applicantType of grant.synopsis.applicantTypes) {
    //     let newApplicationTypeDb = new ApplicantType()
    //     newApplicationTypeDb.code = applicantType.id
    //     newApplicationTypeDb.description = applicantType.description
    //     applicantTypes.push(newApplicationTypeDb)
    // }

    // let fundingCategoryActivities: FundingCategoryActivity[] = []

    // for (const fundingActivityCategories of grant.synopsis.fundingActivityCategories) {
    //     let newFundingCategory = new FundingCategoryActivity()
    //     newFundingCategory.code = fundingActivityCategories.id
    //     newFundingCategory.description = fundingActivityCategories.description
    //     fundingCategoryActivities.push(newFundingCategory)
    // }

    // let fundingInstruments: FundingInstrument[] = []

    // for (const fundingInstrument of grant.synopsis.fundingInstruments) {
    //     let newFundingCategory = new FundingInstrument()
    //     newFundingCategory.code = fundingInstrument.id
    //     newFundingCategory.description = fundingInstrument.description
    //     fundingInstruments.push(newFundingCategory)
    // }

    // opportunity.category = new Category();
    // opportunity.category.name = grant.opportunityCategory.category
    // opportunity.category.description = grant.opportunityCategory.description

    // let packages: Package[] = []
    // for (const _package of grant.opportunityPkgs) {
    //     let newPackage = new Package()
    //     newPackage.cfdas = new Cfdas()
    //     newPackage.cfdas.number = _package.cfdaNumber
    //     newPackage.competition = _package.competitionId
    //     newPackage.competitionTitle = _package.competitionTitle
    //     newPackage.number = _package.packageId
    //     newPackage.openingDate = _package.openingDateStr
    //     newPackage.closingDate = _package.closingDateStr

    //     packages.push(newPackage)
    // }

    // return { opportunity, applicantTypes, fundingCategoryActivities, fundingInstruments, cfdas };
    return

}