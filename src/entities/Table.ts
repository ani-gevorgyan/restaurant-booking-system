import {
    Entity, BaseEntity, PrimaryColumn, Column, Unique,
} from 'typeorm';

@Entity('tables')
@Unique(['tableNumber'])
export default class Table extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({ name: 'tabel_number' })
    tableNumber: number;

    @Column({ name: 'number_of_people' })
    numberOfPeople: number;

    @Column()
    occupied: boolean;
}