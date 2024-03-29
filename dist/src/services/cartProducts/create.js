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
exports.createCartProductsService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities");
const createCartProductsService = (cart, product, amount, requested_colors, requested_sizes) => __awaiter(void 0, void 0, void 0, function* () {
    const cartProductRepo = data_source_1.default.getRepository(entities_1.CartProduct);
    const cartProduct = cartProductRepo.create({
        cart: cart,
        product: product,
        cart_amount: amount,
        requested_colors: requested_colors,
        requested_sizes: requested_sizes,
    });
    yield cartProductRepo.save(cartProduct);
    return cartProduct;
});
exports.createCartProductsService = createCartProductsService;
