import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1687388606344 implements MigrationInterface {
    name = 'AlterTables1687388606344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_products" ADD "requested_colors" text array NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "cart_products" ADD "requested_sizes" text array NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "products" ADD "available_sizes" text array NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "products" ADD "available_colors" text array NOT NULL DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "available_colors"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "available_sizes"`);
        await queryRunner.query(`ALTER TABLE "cart_products" DROP COLUMN "requested_sizes"`);
        await queryRunner.query(`ALTER TABLE "cart_products" DROP COLUMN "requested_colors"`);
    }

}
