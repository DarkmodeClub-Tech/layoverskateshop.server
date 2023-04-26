import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1682467557649 implements MigrationInterface {
    name = 'AlterTables1682467557649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying(300) NOT NULL, "public_id" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_5220c45b8e32d49d767b9b3d725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_4e7f1b413734d5424ba9902a185" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_4e7f1b413734d5424ba9902a185"`);
        await queryRunner.query(`DROP TABLE "photos"`);
    }

}
