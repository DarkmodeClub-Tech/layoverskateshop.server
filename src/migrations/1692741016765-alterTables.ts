import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1692741016765 implements MigrationInterface {
    name = 'AlterTables1692741016765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" ADD "ownerId" uuid`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_556eedea27ffaf50a4ee0c0a058" FOREIGN KEY ("ownerId") REFERENCES "sellers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_556eedea27ffaf50a4ee0c0a058"`);
        await queryRunner.query(`ALTER TABLE "photos" DROP COLUMN "ownerId"`);
    }

}
