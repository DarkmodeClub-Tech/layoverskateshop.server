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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerRouter = void 0;
const express_1 = require("express");
const entities_1 = require("../entities");
const m = __importStar(require("../middlewares"));
const c = __importStar(require("../controllers/seller.controllers"));
exports.sellerRouter = (0, express_1.Router)();
exports.sellerRouter.get("/profile", m.authenticationMiddleware, c.getSellerDataController);
exports.sellerRouter.post("/register", m.verifyDuplicatedUsername(entities_1.Seller), m.verifyDuplicatedCPF(entities_1.Seller), m.verifyDuplicatedEmail(entities_1.Seller), c.registerSellerController);
exports.sellerRouter.post("/auth", c.loginSellerController);
exports.sellerRouter.patch("/update", m.authenticationMiddleware, m.verifyAdmPermissionMiddleware, c.updateSellerController);
exports.sellerRouter.post("/photos", m.authenticationMiddleware, m.verifyAdmPermissionMiddleware, m.uploadFileMiddleware.array("photos", 6), c.savePhotosController);
exports.sellerRouter.post("/avatar", m.authenticationMiddleware, m.uploadFileMiddleware.single("photo"), c.addAvatarPhotoController);
