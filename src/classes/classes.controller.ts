import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpStatus,
    Res,
} from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Controller('classes')
export class ClassesController {
    constructor(private readonly classesService: ClassesService) {}

    @Post()
    async create(@Res() response, @Body() createClassDto: CreateClassDto) {
        // return await this.classesService.create(createClassDto)
        try {
            const Class = await this.classesService.create(createClassDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Class has been created successfully',
                Class,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Class not created!',
                error: 'Bad Request',
            });
        }
    }

    @Get()
    async findAll() {
        return await this.classesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.classesService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Res() response,
        @Param('id') id: string,
        @Body() updateClassDto: UpdateClassDto,
    ) {
        // return await this.classesService.update(id, updateClassDto);

        try {
            const Class = await this.classesService.update(id, updateClassDto);
            return response.status(HttpStatus.OK).json({
                message: 'Class has been updated successfully ',
                Class,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Class not updated!',
                error: 'Bad Request',
            });
        }
    }

    @Delete(':id')
    async remove(@Res() response, @Param('id') id: string) {
        // return await this.classesService.remove(id);
        try {
            const Class = await this.classesService.remove(id);
            return response.status(HttpStatus.OK).json({
                message: 'Class Deleted Successfully',
                Class,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
