import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { SchoolYearsService } from 'src/school-years/school-years.service'
import { Repository } from 'typeorm'
import { CreateMajorDto } from './dto/create-major.dto'
import { UpdateMajorDto } from './dto/update-major.dto'
import { Major } from './entities/major.entity'

@Injectable()
export class MajorsService {
    constructor(
        @InjectRepository(Major)
        private majoresRepository: Repository<Major>,
        private readonly schoolYearsService: SchoolYearsService,
    ) {}

    async create(createMajorDto: CreateMajorDto, schoolYearId: string) {
        // return await this.majoresRepository.save(createMajorDto)
        const schoolYear = await this.schoolYearsService.findOne(schoolYearId)

        return await this.majoresRepository.save({
            ...createMajorDto,
            school_year: schoolYear,
        })
    }

    async findAll(schoolYearId: string) {
        const majors = await this.majoresRepository
            .createQueryBuilder('majors')
            .innerJoinAndSelect(
                'majors.school_year',
                'school_years',
                'school_years.id = :schoolYearId',
                {
                    schoolYearId,
                },
            )
            .getMany()

        return majors
    }

    async findOne(id: string) {
        return await this.majoresRepository.findOneBy({ id })
    }

    async update(id: string, updateMajorDto: UpdateMajorDto) {
        return await this.majoresRepository.update({ id }, updateMajorDto)
    }

    async remove(id: string) {
        return await this.majoresRepository.delete({ id })
    }
}
