import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710095727385 implements MigrationInterface {
    name = 'Migrations1710095727385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tbl_agama" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nama_agama" character varying(255) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_0dd342b58bf36992ded430c36ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tbl_agama"`);
    }

}
