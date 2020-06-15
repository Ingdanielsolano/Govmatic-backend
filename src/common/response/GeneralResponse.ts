import { ApiProperty } from "@nestjs/swagger";

export class GeneralResponse {

    @ApiProperty({ description: "Response status" })
    status: string;

    @ApiProperty({ description: "Description" })
    message: string;

    @ApiProperty({ description: "Data about response" })
    payload: any;
}