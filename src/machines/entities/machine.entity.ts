import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Machine {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    address: string

    @Column()
    room: string

    @Column()
    description: string

    @Column({ default: false })
    is_attendance: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
