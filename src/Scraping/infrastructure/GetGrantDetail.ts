import { Injectable } from "@nestjs/common";
import { Downloader } from "./Downloader";
import { GeneralResponse } from "../../common/response/GeneralResponse";
import { GrantDetail } from "../domain/ValueObjects/GrantDetail";


@Injectable()
export class GetGrantDetail {
    constructor(
        private readonly downloader: Downloader
    ) { }

    async get(code: string): Promise<GeneralResponse> {

        let request = new URLSearchParams();
        request.append("oppId", code)
        const grantJson = await this.downloader.download(`https://www.grants.gov/grantsws/rest/opportunity/details`, request, 0, true)        

        if (grantJson.status != 'SUCCESS')
            return grantJson

        return { status: 'SUCCESS', message: 'Data obtained', payload: this.parseJsonToGrant(grantJson.payload) }
    }

    private parseJsonToGrant(grantJson): GrantDetail {

        let grant: GrantDetail = { ...new GrantDetail(), ...grantJson };

        return grant
    }
}