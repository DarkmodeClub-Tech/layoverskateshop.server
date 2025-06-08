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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.deleteProductController = exports.deactivateProductAddController = exports.updateProductController = exports.getProductsBySellerIdController = exports.getProductsController = exports.registerProductController = void 0;
const s = __importStar(require("../services/products/"));
const services_1 = require("../services");
const registerProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sellerId = req.user.id;
    const files = req.files;
    const data = req.body;
    const seller = yield (0, services_1.getSellerDataByIdService)(sellerId);
    const photos = yield (0, services_1.photoUploaderService)(files, seller);
    const product = yield s.registerProductService(seller, data, photos);
    res.status(201).json(product);
});
exports.registerProductController = registerProductController;
const getProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { offset = 0, limit = 40, search } = req.query;
    const products = yield s.getProductsService(Number(offset), Number(limit), search && String(search));
    res.status(200).json(products);
});
exports.getProductsController = getProductsController;
const getProductsBySellerIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sellerId = req.params.id;
    const { offset = 0, limit = 40 } = req.query;
    const products = yield s.getProductsBySellerIdService(sellerId, Number(offset), Number(limit));
    res.status(200).json(products);
});
exports.getProductsBySellerIdController = getProductsBySellerIdController;
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { id } = req.params;
    const updateData = yield s.updateProductService(id, data);
    res.status(200).json(updateData);
});
exports.updateProductController = updateProductController;
const deactivateProductAddController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield s.deactivateProductAddService(id);
    res.status(204).send();
});
exports.deactivateProductAddController = deactivateProductAddController;
const deleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield s.deleteProductService(id);
    res.status(204).send();
});
exports.deleteProductController = deleteProductController;
