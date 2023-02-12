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
export class Region {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    area: string

    @Column()
    name: string

    @Column()
    teacher: string

    @OneToMany(() => User, (user) => user.region)
    students: User[]

    @ManyToOne(() => SchoolYear, (school_year) => school_year.regions)
    school_year: SchoolYear

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
