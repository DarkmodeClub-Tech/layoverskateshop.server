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
exports.AlterTables1692758943041 = void 0;
class AlterTables1692758943041 {
    constructor() {
        this.name = 'AlterTables1692758943041';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "sellers" ADD "avatarId" uuid`);
            yield queryRunner.query(`ALTER TABLE "sellers" ADD CONSTRAINT "UQ_08bf3d7cccf825e5c999f8cc6e2" UNIQUE ("avatarId")`);
            yield queryRunner.query(`ALTER TABLE "sellers" ADD CONSTRAINT "FK_08bf3d7cccf825e5c999f8cc6e2" FOREIGN KEY ("avatarId") REFERENCES "photos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "sellers" DROP CONSTRAINT "FK_08bf3d7cccf825e5c999f8cc6e2"`);
            yield queryRunner.query(`ALTER TABLE "sellers" DROP CONSTRAINT "UQ_08bf3d7cccf825e5c999f8cc6e2"`);
            yield queryRunner.query(`ALTER TABLE "sellers" DROP COLUMN "avatarId"`);
        });
    }
}
exports.AlterTables1692758943041 = AlterTables1692758943041;
