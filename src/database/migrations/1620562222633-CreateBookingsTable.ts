import { MigrationInterface, TableForeignKey, QueryRunner, Table } from "typeorm";

export class CreateBookingsTable1620562222633 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'bookings',
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
                        length: '255',
                    },
                    {
                        name: 'phone_number',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'date_time',
                        type: 'timestamp',
                    },
                    {
                        name: 'userId',
                        type: 'int'
                    },
                    {
                        name: 'tableId',
                        type: 'int'
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'bookings',
            new TableForeignKey({
                columnNames: ['userId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
            }),
        );

        await queryRunner.createForeignKey(
            'bookings',
            new TableForeignKey({
                columnNames: ['tableId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tables',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bookings');
    }

}
