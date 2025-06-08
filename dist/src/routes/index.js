"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = exports.imageRouter = exports.sellerRouter = exports.categoryRouter = exports.productRouter = exports.customerRouter = void 0;
const customer_routes_1 = __importDefault(require("./customer.routes"));
exports.customerRouter = customer_routes_1.default;
const product_routes_1 = __importDefault(require("./product.routes"));
exports.productRouter = product_routes_1.default;
const category_routes_1 = __importDefault(require("./category.routes"));
exports.categoryRouter = category_routes_1.default;
const seller_routes_1 = __importDefault(require("./seller.routes"));
exports.sellerRouter = seller_routes_1.default;
const images_routes_1 = __importDefault(require("./images.routes"));
exports.imageRouter = images_routes_1.default;
const cart_routes_1 = __importDefault(require("./cart.routes"));
exports.cartRouter = cart_routes_1.default;
