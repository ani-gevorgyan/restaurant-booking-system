import {
    Entity, BaseEntity, PrimaryColumn, Column, Unique, ManyToOne,
} from 'typeorm';
import Table from './Table';
import User from './User';

@Entity('bookings')
export default class Booking extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({ name: 'date_time' })
    dateTime: Date;

    @Column({ name: 'phone_number' })
    phoneNumber: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToOne(() => Table, (table) => table.bookings, {
        cascade: ['update', 'remove']
    })
    table: number;

    @ManyToOne(() => User, (user) => user.bookings, {
        cascade: ['update', 'remove']
    })
    user: number;
}