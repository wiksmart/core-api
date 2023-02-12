import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { Major } from 'src/majors/entities/major.entity'
import { SchoolYear } from './../../school-years/entities/school-year.entity'

export class CreateClassDto {
    @ApiProperty()
    @IsNotEmpty()
    level: string

    @ApiProperty()
    @IsNotEmpty()
    no_class: string

    @ApiProperty()
    @IsNotEmpty()
    major: Major

    // @ApiProperty()
    // @IsNotEmpty()
    // school_year: SchoolYear
}
