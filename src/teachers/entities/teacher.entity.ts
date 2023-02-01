import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    rfid: string;

    @Column()
    name: string;
}

