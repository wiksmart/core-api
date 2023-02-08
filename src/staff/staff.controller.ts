import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { StaffService } from './staff.service'
import { CreateStaffDto } from './dto/create-staff.dto'
import { UpdateStaffDto } from './dto/update-staff.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('staff')
@Controller('staff/:schoolYearId')
export class StaffController {
    constructor(private readonly staffService: StaffService) {}

    @Post()
    create(
        @Body() createStaffDto: CreateStaffDto,
        @Param('schoolYearId') schoolYearId: string,
    ) {
        return this.staffService.create(createStaffDto, schoolYearId)
    }

    @Get()
    findAll(@Param('schoolYearId') schoolYearId: string) {
        return this.staffService.findAll(schoolYearId)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.staffService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
        return this.staffService.update(id, updateStaffDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.staffService.remove(id)
    }
}
