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
exports.AlterTables1685395288009 = void 0;
class AlterTables1685395288009 {
    constructor() {
        this.name = 'AlterTables1685395288009';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "sellers" RENAME COLUMN "is_adm" TO "adm"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_adm"`);
            yield queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "is_adm"`);
            yield queryRunner.query(`ALTER TABLE "sellers" ALTER COLUMN "adm" SET DEFAULT true`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "sellers" ALTER COLUMN "adm" SET DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "customers" ADD "is_adm" boolean NOT NULL DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "is_adm" boolean NOT NULL DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "sellers" RENAME COLUMN "adm" TO "is_adm"`);
        });
    }
}
exports.AlterTables1685395288009 = AlterTables1685395288009;
