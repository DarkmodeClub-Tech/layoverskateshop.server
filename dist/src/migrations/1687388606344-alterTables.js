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
exports.AlterTables1687388606344 = void 0;
class AlterTables1687388606344 {
    constructor() {
        this.name = 'AlterTables1687388606344';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "cart_products" ADD "requested_colors" text array NOT NULL DEFAULT '{}'`);
            yield queryRunner.query(`ALTER TABLE "cart_products" ADD "requested_sizes" text array NOT NULL DEFAULT '{}'`);
            yield queryRunner.query(`ALTER TABLE "products" ADD "available_sizes" text array NOT NULL DEFAULT '{}'`);
            yield queryRunner.query(`ALTER TABLE "products" ADD "available_colors" text array NOT NULL DEFAULT '{}'`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" DROP COLUMN "available_colors"`);
            yield queryRunner.query(`ALTER TABLE "products" DROP COLUMN "available_sizes"`);
            yield queryRunner.query(`ALTER TABLE "cart_products" DROP COLUMN "requested_sizes"`);
            yield queryRunner.query(`ALTER TABLE "cart_products" DROP COLUMN "requested_colors"`);
        });
    }
}
exports.AlterTables1687388606344 = AlterTables1687388606344;
