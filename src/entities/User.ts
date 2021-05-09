import {
    Entity, BaseEntity, PrimaryColumn, Column, Unique, OneToMany
} from 'typeorm';
import Booking from './Booking';

@Entity('users')
@Unique(['email'])
export default class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    @OneToMany(() => Booking, (booking) => booking.user, {
        cascade: ['insert', 'update']
    })
    bookings: Booking[];
}