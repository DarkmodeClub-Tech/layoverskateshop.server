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
exports.AlterTableables1687384939449 = void 0;
class AlterTableables1687384939449 {
    constructor() {
        this.name = 'AlterTableables1687384939449';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "cart_products" ADD "requested_colors" text array NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "cart_products" ADD "requested_sizes" text array NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "products" ADD "available_sizes" text array NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "products" ADD "available_colors" text array NOT NULL`);
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
exports.AlterTableables1687384939449 = AlterTableables1687384939449;
