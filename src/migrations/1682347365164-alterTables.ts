import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1682347365164 implements MigrationInterface {
    name = 'AlterTables1682347365164'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "last_login"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "last_logout"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "last_login"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "last_logout"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastLogin" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastLogout" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "lastLogin" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "lastLogout" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "lastLogout"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "lastLogin"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastLogout"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastLogin"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "last_logout" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "last_login" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ADD "last_logout" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "last_login" TIMESTAMP`);
    }

}
