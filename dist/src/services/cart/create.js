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
exports.createCartService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities/");
const addProducts_1 = require("./addProducts");
const createCartService = (products) => __awaiter(void 0, void 0, void 0, function* () {
    const cartRepo = data_source_1.default.getRepository(entities_1.Cart);
    let cart = new entities_1.Cart();
    yield cartRepo.save(cart);
    if (products) {
        cart = yield (0, addProducts_1.addProductsToCartService)(cart, products);
    }
    return cart;
});
exports.createCartService = createCartService;
