"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const T = __importStar(require("typeorm"));
const _1 = require(".");
let Seller = class Seller extends _1.User {
};
exports.Seller = Seller;
__decorate([
    T.Column({ default: true }),
    __metadata("design:type", Boolean)
], Seller.prototype, "adm", void 0);
__decorate([
    T.OneToMany(() => _1.Product, (product) => product.seller, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Array)
], Seller.prototype, "products", void 0);
__decorate([
    T.OneToMany(() => _1.Photo, (photo) => photo.owner, {
        onDelete: "CASCADE",
        eager: true,
    }),
    __metadata("design:type", Array)
], Seller.prototype, "cover_photos", void 0);
__decorate([
    T.OneToOne(() => _1.Photo, (avatar) => avatar.profile, {
        onDelete: "CASCADE",
        eager: true,
    }),
    T.JoinColumn(),
    __metadata("design:type", _1.Photo)
], Seller.prototype, "avatar", void 0);
exports.Seller = Seller = __decorate([
    T.Entity("sellers")
], Seller);
