import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1681219186397 implements MigrationInterface {
    name = 'AlterTables1681219186397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "city" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "state" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "state" SET DEFAULT 'PB'`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "city" SET DEFAULT 'cg'`);
    }

}
