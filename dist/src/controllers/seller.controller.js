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
exports.addAvatarPhotoController = exports.savePhotosController = exports.updateSellerController = exports.getSellerDataController = exports.loginSellerController = exports.registerSellerController = exports.getSellerDataByIdController = exports.getGlobalSellerCategoriesAndProductsController = void 0;
const s = __importStar(require("../services/"));
const products_1 = require("../services/products");
const getGlobalSellerCategoriesAndProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const globalSeller = yield s.getGlobalSellerService();
    const categories = yield s.getCategoriesService();
    const products = yield (0, products_1.getProductsBySellerIdService)(globalSeller.id);
    const results = {
        seller: globalSeller,
        categories: categories,
        products: products,
    };
    return res.status(200).json(results);
});
exports.getGlobalSellerCategoriesAndProductsController = getGlobalSellerCategoriesAndProductsController;
const getSellerDataByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const seller = yield s.getSellerDataByIdService(id);
    return res.status(200).json(seller);
});
exports.getSellerDataByIdController = getSellerDataByIdController;
const registerSellerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newSeller = yield s.registerSellerService(data);
    return res.status(201).json(newSeller);
});
exports.registerSellerController = registerSellerController;
const loginSellerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const accessToken = yield s.loginSellerService(data);
    return res.status(200).json(accessToken);
});
exports.loginSellerController = loginSellerController;
const getSellerDataController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const sellerData = yield s.getSellerDataByIdService(id);
    return res.status(200).json(sellerData);
});
exports.getSellerDataController = getSellerDataController;
const updateSellerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const data = req.body;
    const updatedData = yield s.updateSellerService(id, data);
    return res.status(200).json(updatedData);
});
exports.updateSellerController = updateSellerController;
const savePhotosController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const photos = req.files;
    const savedPhotos = yield s.savePhotosService(id, photos);
    return res.status(200).json(savedPhotos);
});
exports.savePhotosController = savePhotosController;
const addAvatarPhotoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const file = req.file;
    const seller = yield s.addAvatarPhotoService(id, file);
    return res.status(200).json(seller);
});
exports.addAvatarPhotoController = addAvatarPhotoController;
