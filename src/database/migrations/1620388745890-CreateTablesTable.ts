import { MigrationInterface, TableForeignKey, QueryRunner, Table } from "typeorm";

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
                        name: 'name',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'capacity',
                        type: 'int'
                    },
                    {
                        name: 'is_available',
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
