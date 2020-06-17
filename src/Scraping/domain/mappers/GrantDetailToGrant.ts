import { Opportunity } from "../../../db/entities/business/Opportunity";
import { Agency } from "../../../db/entities/business/Agency";
import { Category } from "../../../db/entities/business/Category";
import { Cfdas } from "../../../db/entities/business/Cfdas";
import { ApplicantType } from "../../../db/entities/business/ApplicantTypes";
import { FundingCategoryActivity } from "../../../db/entities/business/FundingCategoryActivity";
import { FundingInstrument } from "../../../db/entities/business/FundingInstrument";
import { GrantDetail } from "../ValueObjects/GrantDetail";
import { Package } from "../../../db/entities/business/Package";
import { Grant } from "../../../db/entities/business/Grant";
import { AttachmentFolder } from "../../../db/entities/business/Attachment_folder";
import { Attachment } from "../../../db/entities/business/Attachment";

export function grantDetailToGrant(grantDetail: GrantDetail): Grant {

    let grant = new Grant();
    grant.agency = new Agency();
    grant.agency.code = grantDetail.topAgencyDetails.code
    grant.agency.image = grantDetail.topAgencyDetails.agencyCode
    grant.agency.name = grantDetail.topAgencyDetails.agencyName
    grant.attachments = []
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
            newFile.attachmentFolder = newFolder;
            grant.attachments.push(newFile)
        }
    }

    grant.grantPackage = []
    for (const _package of grantDetail.opportunityPkgs) {
        let newPackage = new Package()
        newPackage.cfdas = new Cfdas()
        newPackage.cfdas.number = _package.cfdaNumber
        newPackage.competitionId = _package.competitionId
        newPackage.competitionTitle = _package.competitionTitle
        newPackage.number = _package.packageId
        newPackage.openingDate = _package.openingDateStr
        newPackage.closingDate = _package.closingDateStr
        newPackage.title = _package.programTitle
        newPackage.packageId = _package.packageId
        grant.grantPackage.push({ id: undefined, grant: grant, package: newPackage })
    }

    let mainOpportunity: Opportunity = new Opportunity()
    mainOpportunity.responseDateDesc = grantDetail.synopsis.responseDateDesc
    mainOpportunity.title = grantDetail.opportunityTitle
    mainOpportunity.number = grantDetail.opportunityNumber
    mainOpportunity.numberOfAwards = +grantDetail.synopsis.numberOfAwards
    mainOpportunity.costSharing = grantDetail.synopsis.costSharing
    mainOpportunity.postingDate = grantDetail.synopsis.postingDate
    mainOpportunity.lastUpdateDate = grantDetail.synopsis.lastUpdatedDate
    mainOpportunity.responseDate = grantDetail.synopsis.responseDate
    mainOpportunity.responseDateDesc = grantDetail.synopsis.responseDateDesc
    mainOpportunity.responseDate = grantDetail.synopsis.responseDate
    mainOpportunity.archiveDate = grantDetail.synopsis.archiveDate
    mainOpportunity.awardCeiling = grantDetail.synopsis.awardCeiling
    mainOpportunity.estimatedFunding = grantDetail.synopsis.estimatedFunding
    mainOpportunity.awardFloor = grantDetail.synopsis.awardFloor
    mainOpportunity.applicantElegibilityDesc = grantDetail.synopsis.applicantEligibilityDesc
    mainOpportunity.synopsisDesc = grantDetail.synopsis.synopsisDesc
    mainOpportunity.agency = new Agency()
    mainOpportunity.agency.code = grantDetail.synopsis.agencyDetails.agencyCode
    mainOpportunity.agency.name = grantDetail.synopsis.agencyDetails.agencyName
    mainOpportunity.agency.contact = grantDetail.synopsis.agencyContactDesc
    mainOpportunity.agency.email = grantDetail.synopsis.agencyContactEmail
    mainOpportunity.agency.code = grantDetail.synopsis.agencyName
    mainOpportunity.agency.address = grantDetail.synopsis.agencyAddressDesc
    mainOpportunity.cfdas = []
    mainOpportunity.category = new Category()
    mainOpportunity.category.name = grantDetail.opportunityCategory.category
    mainOpportunity.category.description = grantDetail.opportunityCategory.description

    for (const cfda of grantDetail.cfdas) {
        if (!cfda.cfdaNumber || !cfda.cfdaNumber)
            continue

        let newCfdasDb = new Cfdas()
        newCfdasDb.opportunity = new Opportunity()
        newCfdasDb.number = cfda.cfdaNumber
        newCfdasDb.programTitle = cfda.programTitle
        mainOpportunity.cfdas.push({ id: undefined, opportunity: mainOpportunity, cfdas: newCfdasDb })
    }

    mainOpportunity.applicantTypes = []
    for (const applicantType of grantDetail.synopsis.applicantTypes) {
        let newApplicationType = new ApplicantType()
        newApplicationType.code = applicantType.id
        newApplicationType.description = applicantType.description
        mainOpportunity.applicantTypes.push({ id: undefined, opportunity: mainOpportunity, applicantTypes: newApplicationType })
    }

    mainOpportunity.fundingCategoryActivities = []
    for (const fundingActivityCategories of grantDetail.synopsis.fundingActivityCategories) {
        let newFundingCategory = new FundingCategoryActivity()
        newFundingCategory.code = fundingActivityCategories.id
        newFundingCategory.description = fundingActivityCategories.description
        mainOpportunity.fundingCategoryActivities.push({ id: undefined, opportunity: mainOpportunity, fundingCategoryActivity: newFundingCategory })
    }

    mainOpportunity.fundingInstruments = []
    for (const fundingInstrument of grantDetail.synopsis.fundingInstruments) {
        let newFundingCategory = new FundingInstrument()
        newFundingCategory.code = fundingInstrument.id
        newFundingCategory.description = fundingInstrument.description
        mainOpportunity.fundingInstruments.push({ id: undefined, opportunity: mainOpportunity, fundingInstrument: newFundingCategory })
    }

    grant.opportunities = []
    for (const synopsis of grantDetail.opportunityHistoryDetails) {

        let opportunity = new Opportunity()
        opportunity.responseDateDesc = synopsis.synopsis.responseDateDesc
        opportunity.title = synopsis.opportunityTitle
        opportunity.number = synopsis.opportunityNumber
        opportunity.numberOfAwards = +synopsis.synopsis.numberOfAwards
        opportunity.costSharing = synopsis.synopsis.costSharing
        opportunity.postingDate = synopsis.synopsis.postingDate
        opportunity.lastUpdateDate = synopsis.synopsis.lastUpdatedDate
        opportunity.responseDate = synopsis.synopsis.responseDate
        opportunity.responseDateDesc = synopsis.synopsis.responseDateDesc
        opportunity.responseDate = synopsis.synopsis.responseDate
        opportunity.archiveDate = synopsis.synopsis.archiveDate
        opportunity.awardCeiling = synopsis.synopsis.awardCeiling
        opportunity.estimatedFunding = synopsis.synopsis.estimatedFunding
        opportunity.awardFloor = synopsis.synopsis.awardFloor
        opportunity.applicantElegibilityDesc = synopsis.synopsis.applicantEligibilityDesc
        opportunity.synopsisDesc = synopsis.synopsis.synopsisDesc

        opportunity.agency = new Agency()
        opportunity.agency.code = synopsis.synopsis.agencyDetails.agencyCode
        opportunity.agency.name = synopsis.synopsis.agencyDetails.agencyName
        opportunity.agency.contact = synopsis.synopsis.agencyContactDesc
        opportunity.agency.email = synopsis.synopsis.agencyContactEmail
        opportunity.agency.address = synopsis.synopsis.agencyAddressDesc

        opportunity.category = new Category()
        opportunity.category.name = synopsis.opportunityCategory.category
        opportunity.category.description = synopsis.opportunityCategory.description

        opportunity.applicantTypes = []
        for (const applicantType of synopsis.synopsis.applicantTypes) {
            let newApplicationType = new ApplicantType()
            newApplicationType.code = applicantType.id
            newApplicationType.description = applicantType.description
            opportunity.applicantTypes.push({ id: undefined, opportunity: mainOpportunity, applicantTypes: newApplicationType })
        }

        opportunity.fundingCategoryActivities = []
        for (const fundingActivityCategories of synopsis.synopsis.fundingActivityCategories) {
            let newFundingCategory = new FundingCategoryActivity()
            newFundingCategory.code = fundingActivityCategories.id
            newFundingCategory.description = fundingActivityCategories.description
            opportunity.fundingCategoryActivities.push({ id: undefined, opportunity: mainOpportunity, fundingCategoryActivity: newFundingCategory })
        }

        opportunity.fundingInstruments = []
        for (const fundingInstrument of synopsis.synopsis.fundingInstruments) {
            let newFundingCategory = new FundingInstrument()
            newFundingCategory.code = fundingInstrument.id
            newFundingCategory.description = fundingInstrument.description
            opportunity.fundingInstruments.push({ id: undefined, opportunity: mainOpportunity, fundingInstrument: newFundingCategory })
        }

        opportunity.cfdas = []
        for (const cfda of synopsis.cfdas) {
            if (!cfda.cfdaNumber)
                continue

            let newCfdasDb = new Cfdas()
            newCfdasDb.opportunity = new Opportunity()
            newCfdasDb.number = cfda.cfdaNumber
            newCfdasDb.programTitle = cfda.programTitle
            opportunity.cfdas.push({ id: undefined, opportunity: mainOpportunity, cfdas: newCfdasDb })
        }

        grant.opportunities.push(opportunity)
    }

    grant.opportunities.push(mainOpportunity)

    // console.log(grant.opportunities.map(opp => opp.cfdas.map(cf=>cf.cfdas)));


    return grant;

}