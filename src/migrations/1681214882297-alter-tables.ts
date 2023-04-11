import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1681214882297 implements MigrationInterface {
    name = 'AlterTables1681214882297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders_products_products" ("ordersId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_9a16b87f8bea57750b1bca044ab" PRIMARY KEY ("ordersId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dbab812991c32a735a34748370" ON "orders_products_products" ("ordersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_af9cb00de5ab2af01a6a325343" ON "orders_products_products" ("productsId") `);
        await queryRunner.query(`ALTER TABLE "users" ADD "cartId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_89502c44bd22c06e714c31c1e93" UNIQUE ("cartId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_89502c44bd22c06e714c31c1e93" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_products_products" ADD CONSTRAINT "FK_dbab812991c32a735a34748370c" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "orders_products_products" ADD CONSTRAINT "FK_af9cb00de5ab2af01a6a3253435" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders_products_products" DROP CONSTRAINT "FK_af9cb00de5ab2af01a6a3253435"`);
        await queryRunner.query(`ALTER TABLE "orders_products_products" DROP CONSTRAINT "FK_dbab812991c32a735a34748370c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_89502c44bd22c06e714c31c1e93"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_89502c44bd22c06e714c31c1e93"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cartId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_af9cb00de5ab2af01a6a325343"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dbab812991c32a735a34748370"`);
        await queryRunner.query(`DROP TABLE "orders_products_products"`);
    }

}
