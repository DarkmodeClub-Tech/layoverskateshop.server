import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1684286281140 implements MigrationInterface {
    name = 'AlterTables1684286281140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cart_to_products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" integer NOT NULL, "cartId" uuid, "productId" uuid, CONSTRAINT "PK_35a3649127c441e5dceda7fffba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cart_to_products" ADD CONSTRAINT "FK_8a1e62e10b8f9dea8e077a2fdd0" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_to_products" ADD CONSTRAINT "FK_8684f0aee2d664d765daec0e626" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_to_products" DROP CONSTRAINT "FK_8684f0aee2d664d765daec0e626"`);
        await queryRunner.query(`ALTER TABLE "cart_to_products" DROP CONSTRAINT "FK_8a1e62e10b8f9dea8e077a2fdd0"`);
        await queryRunner.query(`DROP TABLE "cart_to_products"`);
    }

}
