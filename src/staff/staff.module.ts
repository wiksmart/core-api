import { User } from 'src/users/entities/user.entity'
import { Module } from '@nestjs/common'
import { StaffService } from './staff.service'
import { StaffController } from './staff.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SchoolYearsModule } from 'src/school-years/school-years.module'

@Module({
    imports: [TypeOrmModule.forFeature([User]), SchoolYearsModule],
    controllers: [StaffController],
    providers: [StaffService],
})
export class StaffModule {}
