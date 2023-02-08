import { Module } from '@nestjs/common'
import { ClassesService } from './classes.service'
import { ClassesController } from './classes.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Class } from './entities/class.entity'
import { SchoolYearsModule } from './../school-years/school-years.module'

@Module({
    imports: [TypeOrmModule.forFeature([Class]), SchoolYearsModule],
    controllers: [ClassesController],
    providers: [ClassesService],
})
export class ClassesModule {}
