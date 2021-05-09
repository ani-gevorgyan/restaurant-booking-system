import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMealsTable1620406728748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'meals',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'category',
                        type: 'enum',
                        enum: ['DRINKS', 'HOT_DISHES', 'DESERTS', 'SALADS']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('meals');
    }

}
