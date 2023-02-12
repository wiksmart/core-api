import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateSchoolYearDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string
}
