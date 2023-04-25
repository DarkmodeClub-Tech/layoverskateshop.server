import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1682459438455 implements MigrationInterface {
    name = 'AlterTables1682459438455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sellers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(80) NOT NULL, "first_name" character varying(80) NOT NULL, "last_name" character varying(80) NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(150) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(14) NOT NULL, "is_adm" boolean NOT NULL DEFAULT false, "is_active" boolean NOT NULL DEFAULT true, "last_login" TIMESTAMP NOT NULL DEFAULT now(), "last_logout" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, CONSTRAINT "PK_97337ccbf692c58e6c7682de8a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD "sellerId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sellers" ADD CONSTRAINT "FK_61c8b0a0c581ab9e176ac6471c8" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_e40a1dd2909378f0da1f34f7bd6" FOREIGN KEY ("sellerId") REFERENCES "sellers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_e40a1dd2909378f0da1f34f7bd6"`);
        await queryRunner.query(`ALTER TABLE "sellers" DROP CONSTRAINT "FK_61c8b0a0c581ab9e176ac6471c8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "sellerId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "addressId"`);
        await queryRunner.query(`DROP TABLE "sellers"`);
    }

}
