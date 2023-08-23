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
exports.deleteCategoryController = exports.updateCategoryController = exports.getCategoriesController = exports.registerCategoryController = void 0;
const s = __importStar(require("../services/category"));
const registerCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const category = yield s.registerCategoryService(data.title);
    return res.status(201).json(category);
});
exports.registerCategoryController = registerCategoryController;
const getCategoriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { offset = 0, limit = 100 } = req.query;
    const categories = yield s.getCategoriesService(Number(offset), Number(limit));
    return res.status(200).json(categories);
});
exports.getCategoriesController = getCategoriesController;
const updateCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { id } = req.params;
    const updatedData = yield s.updateCategoryService(id, data);
    return res.status(200).json(updatedData);
});
exports.updateCategoryController = updateCategoryController;
const deleteCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield s.deleteCategoryService(id);
    return res.status(204).send();
});
exports.deleteCategoryController = deleteCategoryController;
