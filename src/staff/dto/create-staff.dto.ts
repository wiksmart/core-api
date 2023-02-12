import { IsEmail, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateStaffDto {
    @IsNotEmpty()
    @ApiProperty()
    rfid: string

    @IsNotEmpty()
    @ApiProperty()
    name: string

    @IsEmail()
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @ApiProperty()
    password: string
}
