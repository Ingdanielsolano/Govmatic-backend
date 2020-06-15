import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class CreateAgencyDto {

    @ApiProperty({ type: String, minimum: 4, maximum: 30 })
    @Length(4, 30, { message: 'El nombre debe estar entre 4 a 30 letras' })
    name: string;

    @ApiProperty({ type: String, minimum: 3, maximum: 30 })
    @Length(3, 30, { message: 'El código debe estar entre 4 a 30 letras' })
    code: string;

    @ApiProperty({ type: String, minimum: 3, maximum: 30 })
    @Length(3, 30, { message: 'La dirección debe estar entre 4 a 30 letras' })
    addressDesc: string;

    @ApiProperty({ type: String, minimum: 3, maximum: 30 })
    @Length(3, 30, { message: 'El nombre de contacto debe estar entre 4 a 30 letras' })
    contactName: string;

    @ApiProperty({ type: String, minimum: 3, maximum: 30 })
    @Length(3, 30, { message: 'El email del contacto estar entre 4 a 30 letras' })
    contactEmail: string;

    @ApiProperty({ type: String, minimum: 3, maximum: 30 })
    @Length(3, 30, { message: 'La descripción del email estar entre 4 a 30 letras' })
    contactEmailDesc: string;
}