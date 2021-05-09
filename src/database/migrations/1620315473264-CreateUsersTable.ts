import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1620315473264 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'firstName',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'lastName',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        length: '255'
                    }
                ],
                indices: [{ columnNames: ['email'], isUnique: true }],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
