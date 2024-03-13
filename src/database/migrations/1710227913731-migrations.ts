import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710227913731 implements MigrationInterface {
    name = 'Migrations1710227913731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tbl_permission" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nama_permision" character varying(100) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_866d28a01b1fd9f9eff18b12cfe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tbl_role" DROP COLUMN "last_login"`);
        await queryRunner.query(`ALTER TABLE "tbl_users" ADD "role" uuid`);
        await queryRunner.query(`ALTER TABLE "tbl_users" ADD CONSTRAINT "FK_cd7963be67f74ddc6c3dd301a92" FOREIGN KEY ("role") REFERENCES "tbl_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_users" DROP CONSTRAINT "FK_cd7963be67f74ddc6c3dd301a92"`);
        await queryRunner.query(`ALTER TABLE "tbl_users" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "tbl_role" ADD "last_login" character varying(100) NOT NULL`);
        await queryRunner.query(`DROP TABLE "tbl_permission"`);
    }

}
