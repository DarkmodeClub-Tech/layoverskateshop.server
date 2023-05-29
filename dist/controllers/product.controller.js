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
exports.deleteProductController = exports.deactivateProductAddController = exports.updateProductController = exports.getProductsController = exports.registerProductController = void 0;
const products_1 = require("../services/products/");
const registerProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const files = req.files;
    const data = req.body;
    const product = yield (0, products_1.registerProductService)(data, files);
    return res.status(201).json(product);
});
exports.registerProductController = registerProductController;
const getProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { offset = 0, limit = 100 } = req.query;
    const products = yield (0, products_1.getProductsService)(Number(offset), Number(limit));
    return res.status(200).json(products);
});
exports.getProductsController = getProductsController;
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { id } = req.params;
    const updateData = yield (0, products_1.updateProductService)(id, data);
    return res.status(200).json(updateData);
});
exports.updateProductController = updateProductController;
const deactivateProductAddController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, products_1.deactivateProductAddService)(id);
    return res.status(204).send();
});
exports.deactivateProductAddController = deactivateProductAddController;
const deleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, products_1.deleteProductService)(id);
    return res.status(204).send();
});
exports.deleteProductController = deleteProductController;
