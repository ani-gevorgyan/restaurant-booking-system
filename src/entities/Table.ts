import {
    Entity, BaseEntity, PrimaryColumn, Column, Unique, OneToMany,
} from 'typeorm';
import Booking from './Booking';
import TableMealRef from './TableMealRef';

@Entity('tables')
@Unique(['name'])
export default class Table extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    capacity: number;

    @Column({ name: 'is_available' })
    isAvailable: boolean;

    @OneToMany(() => Booking, (booking) => booking.table, {
        cascade: ['insert', 'update']
    })
    bookings: Booking[];

    @OneToMany(() => TableMealRef, (tableMealRef) => tableMealRef.table, {
        cascade: ['insert', 'update']
    })
    mealIds: TableMealRef[];
}