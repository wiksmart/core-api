import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    rfid: string;

    @Column()
    nis: string;

    @Column()
    name: string;

    @Column()
    class: string;

    @Column()
    region: string;
}
