import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710298411019 implements MigrationInterface {
    name = 'Migrations1710298411019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_users" DROP COLUMN "last_login"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_users" ADD "last_login" character varying(100) NOT NULL`);
    }

}
