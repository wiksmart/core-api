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
import { RegionsService } from './regions.service'
import { CreateRegionDto } from './dto/create-region.dto'
import { UpdateRegionDto } from './dto/update-region.dto'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('regions')
@Controller('regions/:schoolYearId')
export class RegionsController {
    constructor(private readonly regionsService: RegionsService) {}

    @Post()
    create(
        @Body() createRegionDto: CreateRegionDto,
        @Param('schoolYearId') schoolYearId: string,
    ) {
        return this.regionsService.create(createRegionDto, schoolYearId)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@Param('schoolYearId') schoolYearId: string) {
        return this.regionsService.findAll(schoolYearId)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.regionsService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
        return this.regionsService.update(id, updateRegionDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.regionsService.remove(id)
    }
}
