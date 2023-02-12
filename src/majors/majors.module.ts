import { Module } from '@nestjs/common'
import { MajorsService } from './majors.service'
import { MajorsController } from './majors.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Major } from 'src/majors/entities/major.entity'
import { SchoolYearsModule } from 'src/school-years/school-years.module'
@Module({
    imports: [TypeOrmModule.forFeature([Major]), SchoolYearsModule],
    controllers: [MajorsController],
    providers: [MajorsService],
})
export class MajorsModule {}
