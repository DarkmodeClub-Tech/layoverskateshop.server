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
const express_1 = require("express");
const m = __importStar(require("../middlewares"));
const c = __importStar(require("../controllers/product.controller"));
const s = __importStar(require("../schemas/products.schemas"));
const productRouter = (0, express_1.Router)();
productRouter.post("/register", m.authenticationMiddleware, m.verifyAdmPermissionMiddleware, m.uploadFileMiddleware.array("photos", 6), m.validateRequestBodyMiddleware(s.registerProductRequestSchema), c.registerProductController);
productRouter.get("/", c.getProductsController);
productRouter.patch("/update/:id", m.authenticationMiddleware, m.verifyAdmPermissionMiddleware, c.updateProductController);
productRouter.patch("/deactivate/:id", m.authenticationMiddleware, m.verifyAdmPermissionMiddleware, c.deactivateProductAddController);
productRouter.delete("/destroy/:id", m.authenticationMiddleware, m.verifyAdmPermissionMiddleware, c.deleteProductController);
exports.default = productRouter;
