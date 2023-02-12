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
import { MachinesService } from './machines.service'
import { CreateMachineDto } from './dto/create-machine.dto'
import { UpdateMachineDto } from './dto/update-machine.dto'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('machines')
@Controller('machines')
export class MachinesController {
    constructor(private readonly machinesService: MachinesService) {}

    @Post()
    async create(@Body() createMachineDto: CreateMachineDto) {
        return this.machinesService.create(createMachineDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return await this.machinesService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.machinesService.findOne(id)
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateMachineDto: UpdateMachineDto,
    ) {
        return await this.machinesService.update(id, updateMachineDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.machinesService.remove(id)
    }
}
