import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Machine {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    address: string;

    @Column()
    room: string;

    @Column()
    description: string;

    // @Column({ default: true })
    // isActive: boolean;
}
