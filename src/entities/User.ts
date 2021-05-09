import {
    Entity, BaseEntity, PrimaryColumn, Column, Unique
} from 'typeorm';

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
}