import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Res,
    HttpStatus,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Post()
    async create(@Res() response, @Body() createStudentDto: CreateStudentDto) {
        try {
            const Student = await this.studentsService.create(createStudentDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Students has been created successfully',
                Student,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Students not created!',
                error: 'Bad Request',
            });
        }
    }

    @Get()
    findAll() {
        return this.studentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentsService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Res() response,
        @Param('id') id: string,
        @Body() updateStudentDto: UpdateStudentDto,
    ) {
        try {
            const Student = await this.studentsService.update(
                id,
                updateStudentDto,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Students has been updated successfully ',
                Student,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Students not updated!',
                error: 'Bad Request',
            });
        }
    }

    @Delete(':id')
    async remove(@Res() response, @Param('id') id: string) {
        try {
            const Student = await this.studentsService.remove(id);
            return response.status(HttpStatus.OK).json({
                message: 'Students Deleted Successfully',
                Student,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
