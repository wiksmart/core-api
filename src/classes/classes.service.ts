import { Injectable } from '@nestjs/common'
import { CreateClassDto } from './dto/create-class.dto'
import { UpdateClassDto } from './dto/update-class.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Class } from './entities/class.entity'
import { SchoolYearsService } from './../school-years/school-years.service'

@Injectable()
export class ClassesService {
    constructor(
        @InjectRepository(Class)
        private classesRepository: Repository<Class>,
        private readonly schoolYearsService: SchoolYearsService,
    ) {}

    async create(createClassDto: CreateClassDto, schoolYearId: string) {
        const schoolYear = await this.schoolYearsService.findOne(schoolYearId)

        return await this.classesRepository.save({
            ...createClassDto,
            school_year: schoolYear,
        })
    }

    async findAll(schoolYearId: string) {
        const classes = await this.classesRepository
            .createQueryBuilder('classes')
            .innerJoinAndSelect(
                'classes.school_year',
                'school_years',
                'school_years.id = :schoolYearId',
                {
                    schoolYearId,
                },
            )
            .innerJoinAndSelect('classes.major', 'majors')
            .getMany()

        return classes
    }

    async findOne(id: string) {
        return await this.classesRepository.findOneBy({ id })
    }

    async update(id: string, updateClassDto: UpdateClassDto) {
        return await this.classesRepository.update({ id }, updateClassDto)
    }

    async remove(id: string) {
        return await this.classesRepository.delete({ id })
    }
}
