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
exports.removeProductsFromCartController = exports.insertProductsCartController = exports.createCartController = void 0;
const cart_1 = require("../services/cart");
const customer_1 = require("../services/customer");
const createCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const cart = yield (0, cart_1.createCartService)();
    return res.status(201).json(cart);
});
exports.createCartController = createCartController;
const insertProductsCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const { cart } = yield (0, customer_1.retrieveCustomerService)(id);
    const { products } = req.body;
    const cartProducts = yield (0, cart_1.addProductsToCartService)(cart, products);
    return res.status(200).json(cartProducts);
});
exports.insertProductsCartController = insertProductsCartController;
const removeProductsFromCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { products_ids } = req.body;
    const { id } = req.user;
    const { cart } = yield (0, customer_1.retrieveCustomerService)(id);
    yield (0, cart_1.removeProductsFromCartService)(cart, products_ids);
    return res.status(200).send();
});
exports.removeProductsFromCartController = removeProductsFromCartController;
