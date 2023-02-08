import { Class } from 'src/classes/entities/class.entity'
import { SchoolYear } from 'src/school-years/entities/school-year.entity'
import { User } from 'src/users/entities/user.entity'
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Major {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    competency: string

    @Column()
    name: string

    @Column()
    description: string

    @OneToMany(() => Class, (Class) => Class.major)
    classes: Class[]

    @OneToMany(() => User, (user) => user.major)
    students: User[]

    @ManyToOne(() => SchoolYear, (school_year) => school_year.majors)
    school_year: SchoolYear

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
