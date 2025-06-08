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
exports.CartProduct = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
let CartProduct = class CartProduct {
};
exports.CartProduct = CartProduct;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], CartProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartProduct.prototype, "cart_amount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, default: [""] }),
    __metadata("design:type", Array)
], CartProduct.prototype, "requested_colors", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true, default: [""] }),
    __metadata("design:type", Array)
], CartProduct.prototype, "requested_sizes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Cart),
    __metadata("design:type", _1.Cart)
], CartProduct.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Product, {
        eager: true,
    }),
    __metadata("design:type", _1.Product)
], CartProduct.prototype, "product", void 0);
exports.CartProduct = CartProduct = __decorate([
    (0, typeorm_1.Entity)("cart_products")
], CartProduct);
