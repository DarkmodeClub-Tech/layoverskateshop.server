import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1685395288009 implements MigrationInterface {
    name = 'AlterTables1685395288009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sellers" RENAME COLUMN "is_adm" TO "adm"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_adm"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "is_adm"`);
        await queryRunner.query(`ALTER TABLE "sellers" ALTER COLUMN "adm" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sellers" ALTER COLUMN "adm" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "is_adm" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_adm" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "sellers" RENAME COLUMN "adm" TO "is_adm"`);
    }

}
