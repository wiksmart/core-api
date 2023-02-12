import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common'
import { MajorsService } from './majors.service'
import { CreateMajorDto } from './dto/create-major.dto'
import { UpdateMajorDto } from './dto/update-major.dto'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('majors')
@Controller('majors/:schoolYearId')
export class MajorsController {
    constructor(private readonly majorsService: MajorsService) {}

    @Post()
    create(
        @Body() createMajorDto: CreateMajorDto,
        @Param('schoolYearId') schoolYearId: string,
    ) {
        return this.majorsService.create(createMajorDto, schoolYearId)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@Param('schoolYearId') schoolYearId: string) {
        return this.majorsService.findAll(schoolYearId)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.majorsService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMajorDto: UpdateMajorDto) {
        return this.majorsService.update(id, updateMajorDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.majorsService.remove(id)
    }
}
