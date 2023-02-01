import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffsService {
    constructor(
        @InjectRepository(Staff)
        private staffsRepository: Repository<Staff>,
    ) {}
    async create(createStaffDto: CreateStaffDto) {
        return await this.staffsRepository.save(createStaffDto);
    }

    async findAll() {
        return await this.staffsRepository.find();
    }

    async findOne(id: string) {
        return await this.staffsRepository.findOneBy({ id });
    }

    async update(id: string, updateStaffDto: UpdateStaffDto) {
        return await this.staffsRepository.update({ id }, updateStaffDto);
    }

    async remove(id: string) {
        return await this.staffsRepository.delete({ id });
    }
}

