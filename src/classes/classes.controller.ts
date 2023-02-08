import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
    UseGuards,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { ClassesService } from './classes.service'
import { CreateClassDto } from './dto/create-class.dto'
import { UpdateClassDto } from './dto/update-class.dto'

@ApiTags('classes')
@Controller('classes/:schoolYearId')
export class ClassesController {
    constructor(private readonly classesService: ClassesService) {}

    @Post()
    async create(
        @Body() createClassDto: CreateClassDto,
        @Param('schoolYearId') schoolYearId: string,
    ) {
        return await this.classesService.create(createClassDto, schoolYearId)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Param('schoolYearId') schoolYearId: string) {
        return await this.classesService.findAll(schoolYearId)
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.classesService.findOne(id)
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateClassDto: UpdateClassDto,
    ) {
        return await this.classesService.update(id, updateClassDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.classesService.remove(id)
    }
}
