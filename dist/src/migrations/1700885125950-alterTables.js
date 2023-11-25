"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterTables1700885125950 = void 0;
class AlterTables1700885125950 {
    constructor() {
        this.name = 'AlterTables1700885125950';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "product_packaging" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "packaging_type" character varying(10) NOT NULL, "box_length" integer NOT NULL, "box_height" integer NOT NULL, "box_width" integer NOT NULL, "box_weight" integer NOT NULL, CONSTRAINT "PK_8ffe712d3a08a5f34b726f0ab7d" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "products" ADD "packagingId" uuid`);
            yield queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "UQ_37b1f6f78f0d1870b3b6ab7b40e" UNIQUE ("packagingId")`);
            yield queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" SET DEFAULT ''`);
            yield queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_37b1f6f78f0d1870b3b6ab7b40e" FOREIGN KEY ("packagingId") REFERENCES "product_packaging"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_37b1f6f78f0d1870b3b6ab7b40e"`);
            yield queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "UQ_37b1f6f78f0d1870b3b6ab7b40e"`);
            yield queryRunner.query(`ALTER TABLE "products" DROP COLUMN "packagingId"`);
            yield queryRunner.query(`DROP TABLE "product_packaging"`);
        });
    }
}
exports.AlterTables1700885125950 = AlterTables1700885125950;
