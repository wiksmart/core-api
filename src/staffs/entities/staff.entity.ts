import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Staff {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    rfid: string;

    @Column()
    name: string;
}

