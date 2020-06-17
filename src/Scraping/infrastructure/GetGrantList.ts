import { Injectable } from "@nestjs/common";
import { GrantListItem } from "../domain/ValueObjects/GrantListItem";
import { Downloader } from "./Downloader";
import { MAX_ROWS } from "../../common/config/environment";

@Injectable()
export class GetGrantList {
    constructor(
        private readonly downloader: Downloader
    ) { }

    async get(): Promise<GrantListItem[]> {
        let i = 0
        let downloadedGrants: GrantListItem[] = []
        let request = {
            "cfda": "",
            "keyword": "",
            "oppNum": "",
            "oppStatuses": "forecasted|posted",
            "sortBy": "openDate|desc",
            "startRecordNum": 0
        }
        while (downloadedGrants.length < +MAX_ROWS) {

            const grantListJson = await this.downloader.download(`https://www.grants.gov/grantsws/rest/opportunities/search/`, JSON.stringify(request), 0, false)
            if (grantListJson.status != 'SUCCESS')
                break

            downloadedGrants.push(...this.parseListToGrantList(grantListJson))

            if (grantListJson.payload.length < 25)
                break

            i++
            request.startRecordNum = i * 25
        }

        return downloadedGrants
    }

    private parseListToGrantList(grantListJson): GrantListItem[] {
        return grantListJson.payload.oppHits.map(jsonGrant => {
            let grant: GrantListItem = { ...new GrantListItem(), ...jsonGrant };
            return grant
        })
    }
}