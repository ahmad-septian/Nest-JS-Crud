import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710174076089 implements MigrationInterface {
    name = 'Migrations1710174076089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tbl_users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nama_depan" character varying(100) NOT NULL, "nama_belakang" character varying(100) NOT NULL, "username" character varying(100) NOT NULL, "phone_number" character varying(15) NOT NULL, "verif_phone_number" boolean NOT NULL DEFAULT false, "email" character varying(100) NOT NULL, "verif_email" boolean NOT NULL DEFAULT false, "tanggal_lahir" character varying(100) NOT NULL, "alamat" character varying(255) NOT NULL, "password" character varying(100) NOT NULL, "last_login" character varying(100) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_bb1d884179b3e42514b36c01e4e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tbl_users"`);
    }

}
