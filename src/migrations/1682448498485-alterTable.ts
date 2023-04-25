import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTable1682448498485 implements MigrationInterface {
    name = 'AlterTable1682448498485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "adm"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "adm"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_adm" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_active" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "is_adm" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "is_active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "is_adm"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_adm"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "adm" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "adm" boolean NOT NULL DEFAULT false`);
    }

}
