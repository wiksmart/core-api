import { IsEmail, IsNotEmpty } from 'class-validator'
import { Class } from 'src/classes/entities/class.entity'
import { Region } from 'src/regions/entities/region.entity'
import { ApiProperty } from '@nestjs/swagger'
import { Major } from 'src/majors/entities/major.entity'

export class CreateStudentDto {
    @IsNotEmpty()
    @ApiProperty()
    rfid: string

    @IsNotEmpty()
    @ApiProperty()
    nis: string

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
    major: Major

    @IsNotEmpty()
    @ApiProperty()
    region: Region
}
