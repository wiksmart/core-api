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
import { StaffsService } from './staffs.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Controller('staffs')
export class StaffsController {
    constructor(private readonly staffsService: StaffsService) {}

    @Post()
    async create(@Res() response, @Body() createStaffDto: CreateStaffDto) {
        try {
            const Staff = await this.staffsService.create(createStaffDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Staffs has been created successfully',
                Staff,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Staffs not created!',
                error: 'Bad Request',
            });
        }
    }

    @Get()
    findAll() {
        return this.staffsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.staffsService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Res() response,
        @Param('id') id: string,
        @Body() updateStaffDto: UpdateStaffDto,
    ) {
        try {
            const Staff = await this.staffsService.update(id, updateStaffDto);
            return response.status(HttpStatus.OK).json({
                message: 'Staffs has been updated successfully ',
                Staff,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Staffs not updated!',
                error: 'Bad Request',
            });
        }
    }

    @Delete(':id')
    async remove(@Res() response, @Param('id') id: string) {
        try {
            const Staff = await this.staffsService.remove(id);
            return response.status(HttpStatus.OK).json({
                message: 'Staffs Deleted Successfully',
                Staff,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}

