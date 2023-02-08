import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateRegionDto {
    @IsNotEmpty()
    @ApiProperty()
    area: string

    @IsNotEmpty()
    @ApiProperty()
    name: string

    @IsNotEmpty()
    @ApiProperty()
    teacher: string
}
