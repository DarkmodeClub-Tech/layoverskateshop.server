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
exports.getProductsService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities");
const fuse_js_1 = __importDefault(require("fuse.js"));
const getProductsService = (offset, limit, search) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepo = data_source_1.default.getRepository(entities_1.Product);
    const products = yield productRepo.find({ skip: offset, take: limit });
    if (search) {
        const fuseOptions = {
            keys: ["title", "description"],
        };
        const fuse = new fuse_js_1.default(products, fuseOptions);
        const result = fuse.search(search);
        return result.map((item) => item.item);
        // const foundProducts = products.filter((p) =>
        //   p.title.toLowerCase().includes(search.toLowerCase())
        // );
        // return foundProducts;
    }
    return products;
});
exports.getProductsService = getProductsService;
