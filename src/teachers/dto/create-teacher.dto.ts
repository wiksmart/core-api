import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateTeacherDto {
    @IsNotEmpty()
    @ApiProperty()
    rfid: string

    @IsNotEmpty()
    @ApiProperty()
    nip: string

    @IsNotEmpty()
    @ApiProperty()
    name: string

    @IsEmail()
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @ApiProperty()
    password: string

    @IsNotEmpty()
    @ApiProperty()
    division: string
}
