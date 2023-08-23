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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const s = __importStar(require("../services/cart"));
const sc = __importStar(require("../services/customer"));
const createCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const cart = yield s.createCartService();
    return res.status(201).json(cart);
});
exports.createCartController = createCartController;
const insertProductsCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const { cart } = yield sc.retrieveCustomerService(id);
    const { products } = req.body;
    const cartProducts = yield s.addProductsToCartService(cart, products);
    return res.status(200).json(cartProducts);
});
exports.insertProductsCartController = insertProductsCartController;
const removeProductsFromCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { products_ids } = req.body;
    const { id } = req.user;
    const { cart } = yield sc.retrieveCustomerService(id);
    yield s.removeProductsFromCartService(cart, products_ids);
    return res.status(200).send();
});
exports.removeProductsFromCartController = removeProductsFromCartController;
