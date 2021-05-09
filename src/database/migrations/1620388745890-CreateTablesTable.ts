import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablesTable1620388745890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tables',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'table_number',
                        type: 'int',
                    },
                    {
                        name: 'number_of_people',
                        type: 'int'
                    },
                    {
                        name: 'occupied',
                        type: 'boolean'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tables');
    }

}
