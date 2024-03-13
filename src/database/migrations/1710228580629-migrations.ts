import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1710228580629 implements MigrationInterface {
  name = 'Migrations1710228580629';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tbl_users" ADD "" boolean NOT NULL DEFAULT true`,
    );
    await queryRunner.query(
      `ALTER TABLE "tbl_users" ADD "created_by" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tbl_users" DROP COLUMN "created_by"`);
    await queryRunner.query(`ALTER TABLE "tbl_users" DROP COLUMN "isAktif"`);
  }
}
