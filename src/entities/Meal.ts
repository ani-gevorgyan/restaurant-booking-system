import {
    Entity, BaseEntity, PrimaryColumn, Column, Unique,
} from 'typeorm';
import { Type } from '../constants';

@Entity('meals')
export default class Meal extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    catgeory: Type;

    @Column()
    price: string;
}
