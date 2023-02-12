import { Module } from '@nestjs/common'
import { SchoolYearsService } from './school-years.service'
import { SchoolYearsController } from './school-years.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SchoolYear } from './entities/school-year.entity'

@Module({
    imports: [TypeOrmModule.forFeature([SchoolYear])],
    controllers: [SchoolYearsController],
    providers: [SchoolYearsService],
    exports: [SchoolYearsService],
})
export class SchoolYearsModule {}
