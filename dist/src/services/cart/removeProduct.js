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
exports.removeProductsFromCartService = void 0;
const appError_1 = require("../../errors/appError");
const delete_1 = require("../cartProducts/delete");
const retrieve_1 = require("../cartProducts/retrieve");
const retrieve_2 = require("./retrieve");
const removeProductsFromCartService = (cart, cartProducts_ids) => __awaiter(void 0, void 0, void 0, function* () {
    for (const cp_id of cartProducts_ids) {
        const cps = cart.products;
        let cp = yield (0, retrieve_1.retrieveCartProductService)(cp_id);
        if (cps.includes(cp))
            yield (0, delete_1.deleteCartProductService)(cp_id);
        else
            throw new appError_1.AppError(`Product is not in cart`);
    }
    const c = yield (0, retrieve_2.retrieveCartService)(cart.id);
    return c;
});
exports.removeProductsFromCartService = removeProductsFromCartService;
