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
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const cart_entity_1 = require("./cart.entity");
const order_entity_1 = require("./order.entity");
let Customer = class Customer extends user_entity_1.User {
};
exports.Customer = Customer;
__decorate([
    (0, typeorm_1.OneToOne)(() => cart_entity_1.Cart, (cart) => cart.customer, {
        onDelete: "CASCADE",
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", cart_entity_1.Cart)
], Customer.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.customer, { cascade: true }),
    __metadata("design:type", Array)
], Customer.prototype, "orders", void 0);
exports.Customer = Customer = __decorate([
    (0, typeorm_1.Entity)("customers")
], Customer);
