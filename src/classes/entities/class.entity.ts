import { User } from './../../users/entities/user.entity'
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Major } from 'src/majors/entities/major.entity'
import { SchoolYear } from './../../school-years/entities/school-year.entity'

@Entity()
export class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    level: string

    @Column()
    no_class: string

    @ManyToOne(() => Major, (major) => major.classes)
    major: Class

    @ManyToOne(() => SchoolYear, (school_year) => school_year.classes)
    school_year: SchoolYear

    // @OneToMany(() => User, (user) => user.class)
    // students: User[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
