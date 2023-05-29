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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerProductService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities");
const photos_1 = require("../photos");
const registerProductService = (data, photos) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepo = data_source_1.default.getRepository(entities_1.Product);
    const categoryRepo = data_source_1.default.getRepository(entities_1.Category);
    const productInstance = productRepo.create(data);
    productInstance.category = categoryRepo.create(data.category);
    productInstance.photos = yield (0, photos_1.photoUploaderService)(photos);
    yield productRepo.save(productInstance);
    // const newProduct = await productRepo.findOneBy({ id: productInstance.id });
    return productInstance;
});
exports.registerProductService = registerProductService;
