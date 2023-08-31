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
exports.getAllSellersDataService = exports.getSellerDataService = void 0;
const class_transformer_1 = require("class-transformer");
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities");
const appError_1 = require("../../errors/appError");
const getSellerDataService = (sellerId) => __awaiter(void 0, void 0, void 0, function* () {
    const sellerRepo = data_source_1.default.getRepository(entities_1.Seller);
    const sellerData = yield sellerRepo.findOneBy({ id: sellerId });
    if (!sellerData)
        throw new appError_1.AppError("Not Found", 404);
    return (0, class_transformer_1.instanceToPlain)(sellerData);
});
exports.getSellerDataService = getSellerDataService;
const getAllSellersDataService = () => __awaiter(void 0, void 0, void 0, function* () {
    const sellerRepo = data_source_1.default.getRepository(entities_1.Seller);
    const sellers = (yield sellerRepo.find()).map((s) => (0, class_transformer_1.instanceToPlain)(s));
    return sellers;
});
exports.getAllSellersDataService = getAllSellersDataService;
