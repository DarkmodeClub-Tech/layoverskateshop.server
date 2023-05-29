"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const product_controller_1 = require("../controllers/product.controller");
const validateRequestBody_middleware_1 = require("../middlewares/validateRequestBody.middleware");
const products_schemas_1 = require("../schemas/products.schemas");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.post("/register", 
// authenticationMiddleware,
middlewares_1.uploadFileMiddleware.array("photos", 6), (0, validateRequestBody_middleware_1.validateRequestBodyMiddleware)(products_schemas_1.registerProductRequestSchema), product_controller_1.registerProductController);
exports.productRouter.get("/", product_controller_1.getProductsController);
exports.productRouter.patch("/update/:id", product_controller_1.updateProductController);
exports.productRouter.patch("/deactivate/:id", product_controller_1.deactivateProductAddController);
exports.productRouter.delete("/destroy/:id", product_controller_1.deleteProductController);
