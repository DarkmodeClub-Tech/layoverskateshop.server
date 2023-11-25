import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1700885125950 implements MigrationInterface {
    name = 'AlterTables1700885125950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_packaging" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "packaging_type" character varying(10) NOT NULL, "box_length" integer NOT NULL, "box_height" integer NOT NULL, "box_width" integer NOT NULL, "box_weight" integer NOT NULL, CONSTRAINT "PK_8ffe712d3a08a5f34b726f0ab7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD "packagingId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "UQ_37b1f6f78f0d1870b3b6ab7b40e" UNIQUE ("packagingId")`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_37b1f6f78f0d1870b3b6ab7b40e" FOREIGN KEY ("packagingId") REFERENCES "product_packaging"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_37b1f6f78f0d1870b3b6ab7b40e"`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "UQ_37b1f6f78f0d1870b3b6ab7b40e"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "packagingId"`);
        await queryRunner.query(`DROP TABLE "product_packaging"`);
    }

}
