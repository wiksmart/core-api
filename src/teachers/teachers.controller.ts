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
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeachersController {
    constructor(private readonly teachersService: TeachersService) {}

    @Post()
    async createTeachers(
        @Res() response,
        @Body() createTeacherDto: CreateTeacherDto,
    ) {
        try {
            const Teacher = await this.teachersService.create(createTeacherDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Teachers has been created successfully',
                Teacher,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Teachers not created!',
                error: 'Bad Request',
            });
        }
    }

    @Patch(':id')
    async update(
        @Res() response,
        @Param('id') id: string,
        @Body() updateTeacherDto: UpdateTeacherDto,
    ) {
        try {
            const Teacher = await this.teachersService.update(
                id,
                updateTeacherDto,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Teachers has been updated successfully ',
                Teacher,
            });
        } catch (err) {
            // return response.status(err.status).json(err.response);
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Teachers not updated!',
                error: 'Bad Request',
            });
        }
    }

    @Delete(':id')
    async remove(@Res() response, @Param('id') id: string) {
        try {
            const Teacher = await this.teachersService.remove(id);
            return response.status(HttpStatus.OK).json({
                message: 'Teachers Deleted Successfully',
                Teacher,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    findAll() {
        return this.teachersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.teachersService.findOne(id);
    }
}

