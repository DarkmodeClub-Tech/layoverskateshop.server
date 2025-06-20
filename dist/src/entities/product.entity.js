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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const T = __importStar(require("typeorm"));
const _1 = require(".");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    T.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    T.Column({ length: 100 }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    T.Column({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    T.Column({ type: "decimal", precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "promotional_price", void 0);
__decorate([
    T.Column(),
    __metadata("design:type", Number)
], Product.prototype, "max_installments", void 0);
__decorate([
    T.Column({ default: true, nullable: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "available", void 0);
__decorate([
    T.Column({ default: 1 }),
    __metadata("design:type", Number)
], Product.prototype, "stock_amount", void 0);
__decorate([
    T.Column({ default: "" }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    T.Column("text", { array: true, default: [""] }),
    __metadata("design:type", Array)
], Product.prototype, "available_sizes", void 0);
__decorate([
    T.Column("text", { array: true, default: [""] }),
    __metadata("design:type", Array)
], Product.prototype, "available_colors", void 0);
__decorate([
    T.CreateDateColumn(),
    __metadata("design:type", Date)
], Product.prototype, "created_at", void 0);
__decorate([
    T.UpdateDateColumn(),
    __metadata("design:type", Date)
], Product.prototype, "updated_at", void 0);
__decorate([
    T.OneToMany(() => _1.CartProduct, (cartProduct) => cartProduct.product),
    __metadata("design:type", Array)
], Product.prototype, "carts", void 0);
__decorate([
    T.ManyToMany(() => _1.Order, (order) => order.products),
    __metadata("design:type", Array)
], Product.prototype, "orders", void 0);
__decorate([
    T.ManyToOne(() => _1.Seller, (seller) => seller.products),
    __metadata("design:type", _1.Seller)
], Product.prototype, "seller", void 0);
__decorate([
    T.ManyToOne(() => _1.Category, (category) => category.products, {
        eager: true,
        cascade: true,
    }),
    __metadata("design:type", _1.Category)
], Product.prototype, "category", void 0);
__decorate([
    T.OneToMany(() => _1.Photo, (photo) => photo.product, { eager: true }),
    __metadata("design:type", Array)
], Product.prototype, "photos", void 0);
__decorate([
    T.OneToOne(() => _1.ProductPackaging, { eager: true, onDelete: "CASCADE" }),
    T.JoinColumn(),
    __metadata("design:type", _1.ProductPackaging)
], Product.prototype, "packaging", void 0);
exports.Product = Product = __decorate([
    T.Entity("products")
], Product);
