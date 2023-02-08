import { Module } from '@nestjs/common'
import { RegionsService } from './regions.service'
import { RegionsController } from './regions.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Region } from './entities/region.entity'
import { SchoolYearsModule } from 'src/school-years/school-years.module'

@Module({
    imports: [TypeOrmModule.forFeature([Region]), SchoolYearsModule],
    controllers: [RegionsController],
    providers: [RegionsService],
})
export class RegionsModule {}
