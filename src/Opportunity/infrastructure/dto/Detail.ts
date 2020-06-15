import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsNotEmpty } from 'class-validator';

export class DetailDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'Must send the opportunity code' })
    @IsNumberString({}, { message: 'Must send the opportunity code' })
    code: string;
}