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
const productPackaging_entity_1 = require("../../entities/productPackaging.entity");
const category_1 = require("../category");
const photos_1 = require("../photos");
const seller_1 = require("../seller");
const retrieve_1 = require("./retrieve");
const registerProductService = (sellerId, data, photos) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepo = data_source_1.default.getRepository(entities_1.Product);
    const packagingRepo = data_source_1.default.getRepository(productPackaging_entity_1.ProductPackaging);
    const { title, category, price, promotionalPrice, stock_amount, max_installments, description, available_colors, available_sizes, packaging_type, box_height, box_length, box_weight, box_width, } = data;
    let packaging = new productPackaging_entity_1.ProductPackaging();
    packaging.box_height = Number(box_height);
    packaging.box_length = Number(box_length);
    packaging.box_weight = Number(box_weight);
    packaging.box_width = Number(box_width);
    packaging.packaging_type = packaging_type;
    yield packagingRepo.save(packaging);
    let product = new entities_1.Product();
    product.title = title;
    product.price = Number(price);
    product.promotional_price = Number(promotionalPrice);
    product.stock_amount = Number(stock_amount);
    product.max_installments = Number(max_installments);
    product.description = description;
    product.available_sizes = available_sizes;
    product.available_colors = available_colors;
    product.photos = yield (0, photos_1.photoUploaderService)(photos);
    product.category = yield (0, category_1.registerCategoryService)(category);
    product.seller = yield (0, seller_1.getSellerDataByIdService)(sellerId);
    product.packaging = packaging;
    yield productRepo.save(product);
    product = yield (0, retrieve_1.retrieveProductService)(product.id);
    return product;
});
exports.registerProductService = registerProductService;
