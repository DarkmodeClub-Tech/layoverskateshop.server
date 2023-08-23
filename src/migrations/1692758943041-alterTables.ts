import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1692758943041 implements MigrationInterface {
    name = 'AlterTables1692758943041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sellers" ADD "avatarId" uuid`);
        await queryRunner.query(`ALTER TABLE "sellers" ADD CONSTRAINT "UQ_08bf3d7cccf825e5c999f8cc6e2" UNIQUE ("avatarId")`);
        await queryRunner.query(`ALTER TABLE "sellers" ADD CONSTRAINT "FK_08bf3d7cccf825e5c999f8cc6e2" FOREIGN KEY ("avatarId") REFERENCES "photos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sellers" DROP CONSTRAINT "FK_08bf3d7cccf825e5c999f8cc6e2"`);
        await queryRunner.query(`ALTER TABLE "sellers" DROP CONSTRAINT "UQ_08bf3d7cccf825e5c999f8cc6e2"`);
        await queryRunner.query(`ALTER TABLE "sellers" DROP COLUMN "avatarId"`);
    }

}
