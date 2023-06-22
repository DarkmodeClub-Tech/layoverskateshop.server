import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableables1687384939449 implements MigrationInterface {
    name = 'AlterTableables1687384939449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_products" ADD "requested_colors" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart_products" ADD "requested_sizes" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "available_sizes" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "available_colors" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "available_colors"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "available_sizes"`);
        await queryRunner.query(`ALTER TABLE "cart_products" DROP COLUMN "requested_sizes"`);
        await queryRunner.query(`ALTER TABLE "cart_products" DROP COLUMN "requested_colors"`);
    }

}
