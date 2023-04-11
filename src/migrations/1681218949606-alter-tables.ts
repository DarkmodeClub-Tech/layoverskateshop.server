import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1681218949606 implements MigrationInterface {
    name = 'AlterTables1681218949606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_89502c44bd22c06e714c31c1e93"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_89502c44bd22c06e714c31c1e93"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cartId"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "city" character varying(120) NOT NULL DEFAULT 'cg'`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(120) NOT NULL DEFAULT 'PB'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cartId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_89502c44bd22c06e714c31c1e93" UNIQUE ("cartId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_89502c44bd22c06e714c31c1e93" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
