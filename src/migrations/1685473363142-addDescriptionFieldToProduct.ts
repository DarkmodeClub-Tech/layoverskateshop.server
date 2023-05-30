import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionFieldToProduct1685473363142 implements MigrationInterface {
    name = 'AddDescriptionFieldToProduct1685473363142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
    }

}
