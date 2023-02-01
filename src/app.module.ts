import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MachinesModule } from './machines/machines.module';
import { Machine } from './machines/entities/machine.entity';
import { Student } from './students/entities/student.entity';
import { StudentsModule } from './students/students.module';
// import { RegionsModule } from './regions/regions.module'
import { ClassesModule } from './classes/classes.module';
import { Class } from './classes/entities/class.entity';
import { Region } from './regions/entities/region.entity';
import { RegionsModule } from './regions/regions.module';
import { Teacher } from './teachers/entities/teacher.entity';
import { Staff } from './staffs/entities/staff.entity';
import { TeachersModule } from './teachers/teachers.module';
import { StaffsModule } from './staffs/staffs.module';
// import { Region } from './regions/entities/region.entity'

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            entities: [Machine, Student, Class, Region, Teacher, Staff],
            synchronize: true,
        }),
        MachinesModule,
        StudentsModule,
        RegionsModule,
        ClassesModule,
        TeachersModule,
        StaffsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
