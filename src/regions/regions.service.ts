import { Injectable } from '@nestjs/common'
import { CreateRegionDto } from './dto/create-region.dto'
import { UpdateRegionDto } from './dto/update-region.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Region } from './entities/region.entity'
import { SchoolYearsService } from 'src/school-years/school-years.service'

@Injectable()
export class RegionsService {
    constructor(
        @InjectRepository(Region)
        private regionsRepository: Repository<Region>,
        private readonly schoolYearsService: SchoolYearsService,
    ) {}

    async create(createRegionDto: CreateRegionDto, schoolYearId: string) {
        // return await this.regionsRepository.save(createRegionDto)
        const schoolYear = await this.schoolYearsService.findOne(schoolYearId)
        return await this.regionsRepository.save({
            ...createRegionDto,
            school_year: schoolYear,
        })
    }

    async findAll(schoolYearId: string) {
        // return await this.regionsRepository.find()
        const regions = await this.regionsRepository
            .createQueryBuilder('regions')
            .innerJoinAndSelect(
                'regions.school_year',
                'school_years',
                'school_years.id = :schoolYearId',
                {
                    schoolYearId,
                },
            )
            .getMany()

        return regions
    }

    async findOne(id: string) {
        return await this.regionsRepository.findOneBy({ id })
    }

    async update(id: string, updateRegionDto: UpdateRegionDto) {
        return await this.regionsRepository.update({ id }, updateRegionDto)
    }

    async remove(id: string) {
        return await this.regionsRepository.delete({ id })
    }
}
