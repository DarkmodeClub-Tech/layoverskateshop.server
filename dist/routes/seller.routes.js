"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const seller_controllers_1 = require("../controllers/seller.controllers");
exports.sellerRouter = (0, express_1.Router)();
exports.sellerRouter.post("/register", middlewares_1.verifyDuplicatedUsername, middlewares_1.verifyDuplicatedCPF, middlewares_1.verifyDuplicatedEmail, seller_controllers_1.registerSellerController);
exports.sellerRouter.post("/auth", seller_controllers_1.loginSellerController);
