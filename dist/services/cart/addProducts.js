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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductsToCartService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities");
const appError_1 = require("../../errors/appError");
const _1 = require(".");
const create_1 = require("../cartProducts/create");
const products_1 = require("../products");
const addProductsToCartService = (cart, products) => __awaiter(void 0, void 0, void 0, function* () {
    let cartUpdated = cart;
    const cartProductRepo = data_source_1.default.getRepository(entities_1.CartProduct);
    for (const p of products) {
        let product = yield (0, products_1.retrieveProductService)(p.product_id);
        if (p.amount > product.stock_amount) {
            throw new appError_1.AppError(`There is only ${product.stock_amount} unities of ${product.title}`);
        }
        let cartProduct = cart.products.find((cp) => cp.product.id === product.id);
        if (cartProduct) {
            const cart_amount = { cart_amount: p.amount };
            yield cartProductRepo.update(cartProduct.id, cart_amount);
        }
        else {
            yield (0, create_1.createCartProductsService)(cart, product, p.amount);
        }
        cartUpdated = yield (0, _1.retrieveCartService)(cart.id);
    }
    return cartUpdated;
});
exports.addProductsToCartService = addProductsToCartService;
