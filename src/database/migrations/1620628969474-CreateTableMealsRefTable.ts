import { MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm";

export class CreateTableMealsRefTable1620628969474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'table_meals_ref',
                columns: [
                    {
                        name: 'tableId',
                        type: 'int'
                    },
                    {
                        name: 'mealId',
                        type: 'int'
                    },
                ]
            })
        )
        await queryRunner.createForeignKey(
            'table_meals_ref',
            new TableForeignKey({
                columnNames: ['tableId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tables',
            }),
        );

        await queryRunner.createForeignKey(
            'table_meals_ref',
            new TableForeignKey({
                columnNames: ['mealId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'meals',
            }),
        );

        await queryRunner.createPrimaryKey(
            'table_meals_ref', ['tableId', 'mealId']
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('table_meals_ref');
    }

}
