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
exports.AlterTables1692741016765 = void 0;
class AlterTables1692741016765 {
    constructor() {
        this.name = 'AlterTables1692741016765';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "photos" ADD "ownerId" uuid`);
            yield queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_556eedea27ffaf50a4ee0c0a058" FOREIGN KEY ("ownerId") REFERENCES "sellers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_556eedea27ffaf50a4ee0c0a058"`);
            yield queryRunner.query(`ALTER TABLE "photos" DROP COLUMN "ownerId"`);
        });
    }
}
exports.AlterTables1692741016765 = AlterTables1692741016765;
