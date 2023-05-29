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
exports.deleteCategoryController = exports.updateCategoryController = exports.getCategoriesController = exports.registerCategoryController = void 0;
const category_1 = require("../services/category");
const registerCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const category = yield (0, category_1.registerCategoryService)(data);
    return res.status(201).json(category);
});
exports.registerCategoryController = registerCategoryController;
const getCategoriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { offset = 0, limit = 100 } = req.query;
    const categories = yield (0, category_1.getCategoriesService)(Number(offset), Number(limit));
    return res.status(200).json(categories);
});
exports.getCategoriesController = getCategoriesController;
const updateCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { id } = req.params;
    const updatedData = yield (0, category_1.updateCategoryService)(id, data);
    return res.status(200).json(updatedData);
});
exports.updateCategoryController = updateCategoryController;
const deleteCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, category_1.deleteCategoryService)(id);
    return res.status(204).send();
});
exports.deleteCategoryController = deleteCategoryController;
