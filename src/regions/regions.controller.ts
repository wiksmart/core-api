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
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@Controller('regions')
export class RegionsController {
    constructor(private readonly regionsService: RegionsService) {}

    @Post()
    async create(@Res() response, @Body() createRegionDto: CreateRegionDto) {
        // return this.regionsService.create(createRegionDto)
        try {
            const Region = await this.regionsService.create(createRegionDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Regions has been created successfully',
                Region,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Regions not created!',
                error: 'Bad Request',
            });
        }
    }

    @Get()
    findAll() {
        return this.regionsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.regionsService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Res() response,
        @Param('id') id: string,
        @Body() updateRegionDto: UpdateRegionDto,
    ) {
        // return this.regionsService.update(id, updateRegionDto);
        try {
            const Region = await this.regionsService.update(
                id,
                updateRegionDto,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Regions has been updated successfully ',
                Region,
            });
        } catch (err) {
            // return response.status(err.status).json(err.response);
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Regions not updated!',
                error: 'Bad Request',
            });
        }
    }

    @Delete(':id')
    async remove(@Res() response, @Param('id') id: string) {
        // return this.regionsService.remove(id);
        try {
            const Region = await this.regionsService.remove(id);
            return response.status(HttpStatus.OK).json({
                message: 'Regions Deleted Successfully',
                Region,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
