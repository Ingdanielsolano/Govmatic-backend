import { Injectable } from "@nestjs/common";
import { Downloader } from "./Downloader";
import { GeneralResponse } from "src/common/response/GeneralResponse";
import { GrantDetail } from "../domain/ValueObjects/GrantDetail";


@Injectable()
export class GetGrantDetail {
    constructor(
        private readonly downloader: Downloader
    ) { }

    async get(code: string): Promise<GeneralResponse> {

        let request = new URLSearchParams();
        request.append("oppId", code)
        const grantJson = {
            status: 'SUCCESS',
            message: '',
            payload: {
                "id": 327723,
                "revision": 1,
                "opportunityNumber": "NOAA-NOS-OCM-2021-2006566",
                "opportunityTitle": "FY21-22 CRCP State and Territorial Coral Reef Conservation Cooperative Agreements",
                "owningAgencyCode": "DOC",
                "listed": "L",
                "publisherUid": "fisaac",
                "flag2006": "N",
                "opportunityCategory": {
                    "category": "D",
                    "description": "Discretionary"
                },
                "synopsis": {
                    "opportunityId": 327723,
                    "version": 2,
                    "agencyCode": "DOC",
                    "agencyName": "Frederick L Isaac\nGrants Management Specialist",
                    "agencyPhone": "30-628-1330",
                    "agencyAddressDesc": "Work",
                    "agencyDetails": {
                        "code": "DOC",
                        "seed": "DOC",
                        "agencyName": "Department of Commerce",
                        "agencyCode": "DOC",
                        "topAgencyCode": "DOC"
                    },
                    "topAgencyDetails": {
                        "code": "DOC",
                        "seed": "DOC",
                        "agencyName": "Department of Commerce",
                        "agencyCode": "DOC",
                        "topAgencyCode": "DOC"
                    },
                    "agencyContactPhone": "30-628-1330",
                    "agencyContactName": "Frederick L Isaac\nGrants Management Specialist",
                    "agencyContactDesc": "Craig Reid\t(240) 533-0783\r\n1305 East West Highway\r\nSilver Spring, MD 20910",
                    "agencyContactEmail": "craig.a.reid@noaa.gov",
                    "agencyContactEmailDesc": "Work",
                    "synopsisDesc": "<p>1. PROJECT LISTS must be submitted via email to the appropriate NOAA Coral Reef Management Liaison (see Section VII. of this announcement) and Craig.A.Reid@noaa.gov by 11:59 p.m. Eastern Time on Thursday, August 27, 2020.</p>\n<p>2. PRE-APPLICATIONS are due to NOAA no later than 11:59 p.m. Eastern Time on Thursday, October 8, 2020. Applicants must submit an electronic copy of their PRE-APPLICATION (application elements 1-3) via email to coral.grants@noaa.gov with a copy to their NOAA Coral Reef Management Liaison (see Section VII. of this announcement). Federal financial assistance forms are not required to be submitted with the PRE-APPLICATIONS.</p>\n<p>3. FINAL APPLICATIONS are due to NOAA no later than 11:59 p.m. Eastern Time on Thursday, February 11, 2021 via http://www.grants.gov.</p>\n<p><span style=\"color: black;\">FFO description: The NOAA Coral Reef Conservation Program, as authorized by the Coral Reef Conservation Act of 2000, provides matching awards of financial assistance to State, Territorial and Commonwealth resource management agencies appointed by their respective Governors to serve as the primary point of contact agencies for coral reef conservation activities in each of the jurisdictions of American Samoa, Florida, the Commonwealth of the Northern Mariana Islands, Guam, Hawaii, Puerto Rico, and the U.S. Virgin Islands. The awards are administered as cooperative agreements to enable the collaboration and involvement of NOAA in the planning and implementation of the work. The objective of these Cooperative Agreements is to support coral reef management and monitoring programs and conservation projects that seek to improve the condition of coral reef ecosystem resources located in these seven U.S. States, Territories and Commonwealths.</span></p>\n<p><span style=\"color: black;\">Funding for this program is subject to the availability of Congressional appropriations and is expected to range between approximately $3,500,000 and $4,500,000 in FY 2021. Funding made&nbsp;available from NOAA's Coral Reef Conservation Program is intended to support priority coral reef management activities as described in Section I.B. of this Federal Funding Opportunity announcement. Continued support in FY 2022 is contingent upon the availability of future funding; the recipient's ability to administer Federal funds provided by NOAA Coral Reef Conservation Program; and the performance of the recipient during the initial year of the award and past awards. NOAA expects that each eligible applicant will request Federal funding at a funding level between $300,000 and $900,000 per year, depending on the existing capabilities of the applicant agency to implement the proposed work. The average annual award size is expected to be approximately $575,000 per year.</span></p>",
                    "responseDate": "Feb 22, 2021 12:00:00 AM EST",
                    "postingDate": "Jun 16, 2020 12:00:00 AM EDT",
                    "archiveDate": "Mar 23, 2021 12:00:00 AM EDT",
                    "costSharing": true,
                    "numberOfAwards": "7",
                    "estimatedFunding": "4000000",
                    "estimatedFundingFormatted": "4,000,000",
                    "awardCeiling": "900000",
                    "awardCeilingFormatted": "900,000",
                    "awardFloor": "300000",
                    "awardFloorFormatted": "300,000",
                    "applicantEligibilityDesc": "Eligible applicants are limited to the State, Territorial and Commonwealth natural resource management agencies that were appointed by their respective Governors to serve as the primary point of contact agencies for coral reef conservation activities in each of the jurisdictions of American Samoa, Florida, the Commonwealth of the Northern Mariana Islands, Guam, Hawaii, Puerto Rico, and the U.S. Virgin Islands.",
                    "sendEmail": "Y",
                    "createTimeStamp": "Jun 16, 2020 11:05:29 AM EDT",
                    "modComments": "To change the close date to 02/22/2021",
                    "createdDate": "Jun 16, 2020 10:52:30 AM EDT",
                    "lastUpdatedDate": "Jun 16, 2020 10:59:15 AM EDT",
                    "applicantTypes": [
                        {
                            "id": "25",
                            "description": "Others (see text field entitled \"Additional Information on Eligibility\" for clarification)"
                        }
                    ],
                    "fundingInstruments": [
                        {
                            "id": "CA",
                            "description": "Cooperative Agreement"
                        }
                    ],
                    "fundingActivityCategories": [
                        {
                            "id": "ENV",
                            "description": "Environment"
                        },
                        {
                            "id": "NR",
                            "description": "Natural Resources"
                        },
                        {
                            "id": "ST",
                            "description": "Science and Technology and other Research and Development"
                        }
                    ],
                    "responseDateStr": "2021-02-22-00-00-00",
                    "postingDateStr": "2020-06-16-00-00-00",
                    "archiveDateStr": "2021-03-23-00-00-00",
                    "createTimeStampStr": "2020-06-16-11-05-29"
                },
                "agencyDetails": {
                    "code": "DOC",
                    "seed": "DOC",
                    "agencyName": "Department of Commerce",
                    "agencyCode": "DOC",
                    "topAgencyCode": "DOC"
                },
                "topAgencyDetails": {
                    "code": "DOC",
                    "seed": "DOC",
                    "agencyName": "Department of Commerce",
                    "agencyCode": "DOC",
                    "topAgencyCode": "DOC"
                },
                "synopsisAttachmentFolders": [
                    {
                        "id": 47208,
                        "opportunityId": 327723,
                        "folderType": "Full Announcement",
                        "folderName": "Full Announcement",
                        "zipLobSize": 71525,
                        "createdDate": "Jun 16, 2020 11:04:48 AM EDT",
                        "lastUpdatedDate": "Jun 16, 2020 11:05:29 AM EDT",
                        "synopsisAttachments": [
                            {
                                "id": 299639,
                                "opportunityId": 327723,
                                "mimeType": "application/pdf",
                                "fileName": "NOAA-NOS-OCM-2021-2006566 NOFO Report.pdf",
                                "fileDescription": "Full Announcement",
                                "fileLobSize": 93568,
                                "createdDate": "Jun 16, 2020 11:05:29 AM EDT",
                                "synopsisAttFolderId": 47208
                            }
                        ]
                    }
                ],
                "synopsisDocumentURLs": [],
                "synAttChangeComments": [],
                "cfdas": [
                    {
                        "id": 382602,
                        "opportunityId": 327723,
                        "cfdaNumber": "11.482",
                        "programTitle": "Coral Reef Conservation Program"
                    }
                ],
                "opportunityHistoryDetails": [
                    {
                        "oppHistId": {
                            "opportunityId": 327723,
                            "revision": 0
                        },
                        "opportunityId": 327723,
                        "revision": 0,
                        "opportunityNumber": "NOAA-NOS-OCM-2021-2006566",
                        "opportunityTitle": "FY21-22 CRCP State and Territorial Coral Reef Conservation Cooperative Agreements",
                        "owningAgencyCode": "DOC",
                        "publisherUid": "fisaac",
                        "listed": "L",
                        "opportunityCategory": {
                            "category": "D",
                            "description": "Discretionary"
                        },
                        "synopsis": {
                            "id": {
                                "opportunityId": 327723,
                                "revision": 0
                            },
                            "opportunityId": 327723,
                            "revision": 0,
                            "version": 1,
                            "agencyCode": "DOC",
                            "agencyAddressDesc": "Work",
                            "agencyDetails": {
                                "code": "DOC",
                                "seed": "DOC",
                                "agencyName": "Department of Commerce",
                                "agencyCode": "DOC",
                                "topAgencyCode": "DOC"
                            },
                            "agencyContactPhone": "30-628-1330",
                            "agencyContactName": "Frederick L Isaac\nGrants Management Specialist",
                            "agencyContactDesc": "Craig Reid\t(240) 533-0783\r\n1305 East West Highway\r\nSilver Spring, MD 20910",
                            "agencyContactEmail": "craig.a.reid@noaa.gov",
                            "agencyContactEmailDesc": "Work",
                            "synopsisDesc": "<p>1. PROJECT LISTS must be submitted via email to the appropriate NOAA Coral Reef Management Liaison (see Section VII. of this announcement) and Craig.A.Reid@noaa.gov by 11:59 p.m. Eastern Time on Thursday, August 27, 2020.</p>\n<p>2. PRE-APPLICATIONS are due to NOAA no later than 11:59 p.m. Eastern Time on Thursday, October 8, 2020. Applicants must submit an electronic copy of their PRE-APPLICATION (application elements 1-3) via email to coral.grants@noaa.gov with a copy to their NOAA Coral Reef Management Liaison (see Section VII. of this announcement). Federal financial assistance forms are not required to be submitted with the PRE-APPLICATIONS.</p>\n<p>3. FINAL APPLICATIONS are due to NOAA no later than 11:59 p.m. Eastern Time on Thursday, February 11, 2021 via http://www.grants.gov.</p>\n<p><span style=\"color: black;\">FFO description: The NOAA Coral Reef Conservation Program, as authorized by the Coral Reef Conservation Act of 2000, provides matching awards of financial assistance to State, Territorial and Commonwealth resource management agencies appointed by their respective Governors to serve as the primary point of contact agencies for coral reef conservation activities in each of the jurisdictions of American Samoa, Florida, the Commonwealth of the Northern Mariana Islands, Guam, Hawaii, Puerto Rico, and the U.S. Virgin Islands. The awards are administered as cooperative agreements to enable the collaboration and involvement of NOAA in the planning and implementation of the work. The objective of these Cooperative Agreements is to support coral reef management and monitoring programs and conservation projects that seek to improve the condition of coral reef ecosystem resources located in these seven U.S. States, Territories and Commonwealths.</span></p>\n<p><span style=\"color: black;\">Funding for this program is subject to the availability of Congressional appropriations and is expected to range between approximately $3,500,000 and $4,500,000 in FY 2021. Funding made&nbsp;available from NOAA's Coral Reef Conservation Program is intended to support priority coral reef management activities as described in Section I.B. of this Federal Funding Opportunity announcement. Continued support in FY 2022 is contingent upon the availability of future funding; the recipient's ability to administer Federal funds provided by NOAA Coral Reef Conservation Program; and the performance of the recipient during the initial year of the award and past awards. NOAA expects that each eligible applicant will request Federal funding at a funding level between $300,000 and $900,000 per year, depending on the existing capabilities of the applicant agency to implement the proposed work. The average annual award size is expected to be approximately $575,000 per year.</span></p>",
                            "responseDate": "Feb 21, 2021 12:00:00 AM EST",
                            "postingDate": "Jun 16, 2020 12:00:00 AM EDT",
                            "archiveDate": "Mar 23, 2021 12:00:00 AM EDT",
                            "costSharing": true,
                            "numberOfAwards": "7",
                            "estimatedFunding": "4000000",
                            "estimatedFundingFormatted": "4,000,000",
                            "awardCeiling": "900000",
                            "awardCeilingFormatted": "900,000",
                            "awardFloor": "300000",
                            "awardFloorFormatted": "300,000",
                            "applicantEligibilityDesc": "Eligible applicants are limited to the State, Territorial and Commonwealth natural resource management agencies that were appointed by their respective Governors to serve as the primary point of contact agencies for coral reef conservation activities in each of the jurisdictions of American Samoa, Florida, the Commonwealth of the Northern Mariana Islands, Guam, Hawaii, Puerto Rico, and the U.S. Virgin Islands.",
                            "createTimeStamp": "Jun 16, 2020 10:52:30 AM EDT",
                            "sendEmail": "Y",
                            "actionType": "U",
                            "actionDate": "Jun 16, 2020 10:59:15 AM EDT",
                            "createdDate": "Jun 16, 2020 10:52:30 AM EDT",
                            "lastUpdatedDate": "Jun 16, 2020 10:52:30 AM EDT",
                            "applicantTypes": [
                                {
                                    "id": "25",
                                    "description": "Others (see text field entitled \"Additional Information on Eligibility\" for clarification)"
                                }
                            ],
                            "fundingInstruments": [
                                {
                                    "id": "CA",
                                    "description": "Cooperative Agreement"
                                }
                            ],
                            "fundingActivityCategories": [
                                {
                                    "id": "ENV",
                                    "description": "Environment"
                                },
                                {
                                    "id": "NR",
                                    "description": "Natural Resources"
                                },
                                {
                                    "id": "ST",
                                    "description": "Science and Technology and other Research and Development"
                                }
                            ],
                            "responseDateStr": "2021-02-21-00-00-00",
                            "postingDateStr": "2020-06-16-00-00-00",
                            "archiveDateStr": "2021-03-23-00-00-00",
                            "createTimeStampStr": "2020-06-16-10-52-30"
                        },
                        "cfdas": [
                            {
                                "id": 382602,
                                "opportunityId": 327723,
                                "revision": 0,
                                "cfdaNumber": "11.482",
                                "programTitle": "Coral Reef Conservation Program"
                            }
                        ],
                        "synopsisModifiedFields": [],
                        "forecastModifiedFields": []
                    }
                ],
                "opportunityPkgs": [
                    {
                        "id": 262216,
                        "topportunityId": 327723,
                        "familyId": 15,
                        "dialect": "XFDL2.2",
                        "opportunityNumber": "NOAA-NOS-OCM-2021-2006566",
                        "opportunityTitle": "FY21-22 CRCP State and Territorial Coral Reef Conservation Cooperative Agreements",
                        "cfdaNumber": "11.482",
                        "openingDate": "Jun 16, 2020 12:00:00 AM EDT",
                        "closingDate": "Feb 22, 2021 12:00:00 AM EST",
                        "owningAgencyCode": "DOC",
                        "agencyDetails": {
                            "code": "DOC",
                            "seed": "DOC",
                            "agencyName": "Department of Commerce",
                            "agencyCode": "DOC",
                            "topAgencyCode": "DOC"
                        },
                        "topAgencyDetails": {
                            "code": "DOC",
                            "seed": "DOC",
                            "agencyName": "Department of Commerce",
                            "agencyCode": "DOC",
                            "topAgencyCode": "DOC"
                        },
                        "programTitle": "Coral Reef Conservation Program",
                        "contactInfo": "Craig Reid\t(240) 533-0783\r\n1305 East West Highway, Silver Spring, MD 20910\r\ncraig.a.reid@noaa.gov",
                        "competitionId": "2891498",
                        "competitionTitle": "FY21-22 CRCP State and Territorial Coral Reef Conservation Cooperative Agreements",
                        "electronicRequired": "Y",
                        "expectedApplicationCount": 7,
                        "openToApplicantType": 1,
                        "listed": "L",
                        "isMultiProject": "N",
                        "extension": "pdf",
                        "mimetype": "application/pdf",
                        "lastUpdate": "Jun 16, 2020 11:03:28 AM EDT",
                        "workspaceCompatibleFlag": "Y",
                        "packageId": "PKG00262216",
                        "openingDateStr": "2020-06-16-00-00-00",
                        "closingDateStr": "2021-02-22-00-00-00"
                    }
                ],
                "closedOpportunityPkgs": [],
                "originalDueDate": "Feb 21, 2021 12:00:00 AM EST",
                "synopsisModifiedFields": [
                    "revision",
                    "version",
                    "responseDate"
                ],
                "forecastModifiedFields": [],
                "errorMessages": [],
                "synPostDateInPast": true,
                "docType": "synopsis",
                "forecastHistCount": 0,
                "synopsisHistCount": 0,
                "assistCompatible": false,
                "assistURL": "",
                "relatedOpps": [],
                "draftMode": "N"
            }
        }
        // const grantJson = await this.downloader.download(`https://www.grants.gov/grantsws/rest/opportunity/details`, request, 0, true)
        // console.log(JSON.stringify(grantJson));

        if (grantJson.status != 'SUCCESS')
            return grantJson

        return { status: 'SUCCESS', message: 'Data obtained', payload: this.parseJsonToGrant(grantJson.payload) }
    }

    private parseJsonToGrant(grantJson): GrantDetail {
        
        let grant: GrantDetail = { ...new GrantDetail(), ...grantJson };
        
        return grant
    }
}