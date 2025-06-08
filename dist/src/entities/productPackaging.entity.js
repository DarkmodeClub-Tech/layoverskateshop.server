"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPackaging = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
let ProductPackaging = class ProductPackaging {
};
exports.ProductPackaging = ProductPackaging;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", Number)
], ProductPackaging.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], ProductPackaging.prototype, "packaging_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductPackaging.prototype, "box_length", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductPackaging.prototype, "box_height", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductPackaging.prototype, "box_width", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductPackaging.prototype, "box_weight", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _1.Product, (product) => product.packaging),
    __metadata("design:type", _1.Product)
], ProductPackaging.prototype, "product", void 0);
exports.ProductPackaging = ProductPackaging = __decorate([
    (0, typeorm_1.Entity)("product_packaging")
], ProductPackaging);
