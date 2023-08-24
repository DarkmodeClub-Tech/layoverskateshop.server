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
exports.Photo = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const seller_entity_1 = require("./seller.entity");
let Photo = class Photo {
};
exports.Photo = Photo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Photo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 300 }),
    __metadata("design:type", String)
], Photo.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Photo.prototype, "public_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.photos),
    __metadata("design:type", product_entity_1.Product)
], Photo.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => seller_entity_1.Seller, (seller) => seller.photos),
    __metadata("design:type", seller_entity_1.Seller)
], Photo.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => seller_entity_1.Seller, (profile) => profile.avatar),
    __metadata("design:type", seller_entity_1.Seller)
], Photo.prototype, "profile", void 0);
exports.Photo = Photo = __decorate([
    (0, typeorm_1.Entity)("photos")
], Photo);
