import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1710219891090 implements MigrationInterface {
  name = 'Migrations1710219891090';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tbl_role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nama_role" character varying(100) NOT NULL, "deskripsi_role" character varying(100) NOT NULL, "last_login" character varying(100) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_7fb8c467d6259854a09dd60c109" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tbl_role"`);
  }
}
