import fetch from "node-fetch";
import { Injectable } from "@nestjs/common";
import { GeneralResponse } from "../../common/response/GeneralResponse";

@Injectable()
export class Downloader {
    constructor() { }

    async download(url, request, times: number, formData): Promise<GeneralResponse> {
        if (times > 5)
            return { status: 'DOWNLOAD_FAILED', message: 'Could not download the info', payload: null }

        try {
            let headers = {}
            if (formData)
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            else
                headers = {
                    'Content-Type': 'application/json'
                }

            const fetchGrantList = await fetch(url,
                {
                    method: 'POST',
                    body: request,
                    headers
                })

            const data = await fetchGrantList.json()

            return { status: 'SUCCESS', message: 'Data downloaded', payload: data }

        } catch (error) {
            times++
            this.download(url, request, times, formData)
        }
    }
}