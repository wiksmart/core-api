import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateMachineDto {
    @ApiProperty()
    @IsNotEmpty()
    address: string

    @ApiProperty()
    @IsNotEmpty()
    room: string

    @ApiProperty()
    @IsNotEmpty()
    description: string

    @ApiProperty()
    @IsNotEmpty()
    is_attendance: boolean
}
