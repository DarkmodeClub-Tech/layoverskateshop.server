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
exports.Seller = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
let Seller = class Seller extends _1.User {
};
exports.Seller = Seller;
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Seller.prototype, "adm", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Product, (product) => product.seller, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Array)
], Seller.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Photo, (photo) => photo.owner, {
        onDelete: "CASCADE",
        eager: true,
    }),
    __metadata("design:type", Array)
], Seller.prototype, "photos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _1.Photo, (avatar) => avatar.owner, {
        onDelete: "CASCADE",
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", _1.Photo)
], Seller.prototype, "avatar", void 0);
exports.Seller = Seller = __decorate([
    (0, typeorm_1.Entity)("sellers")
], Seller);
