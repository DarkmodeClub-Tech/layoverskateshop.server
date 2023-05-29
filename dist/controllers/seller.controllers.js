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
exports.loginSellerController = exports.registerSellerController = void 0;
const seller_1 = require("../services/seller");
const registerSellerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newSeller = yield (0, seller_1.registerSellerService)(data);
    return res.status(201).json(newSeller);
});
exports.registerSellerController = registerSellerController;
const loginSellerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const accessToken = yield (0, seller_1.loginSellerService)(data);
    return res.status(200).json(accessToken);
});
exports.loginSellerController = loginSellerController;
