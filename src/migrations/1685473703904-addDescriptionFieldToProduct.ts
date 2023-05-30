import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionFieldToProduct1685473703904 implements MigrationInterface {
    name = 'AddDescriptionFieldToProduct1685473703904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
    }

}
