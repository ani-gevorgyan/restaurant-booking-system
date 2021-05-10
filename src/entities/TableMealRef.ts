import {
    Entity, BaseEntity, Column, ManyToOne,
} from 'typeorm';
import Table from './Table';

@Entity('table_meals_ref')
export default class TableMealRef extends BaseEntity {
    @Column({ primary: true })
    tableId: number;

    @Column({ primary: true })
    mealId: number;

    @ManyToOne(() => Table, (table) => table.mealIds)
    table: Table;
}