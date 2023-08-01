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
exports.photoDestroyerService = void 0;
const cloudinary_1 = require("cloudinary");
require("dotenv/config");
const entities_1 = require("../../entities");
const data_source_1 = __importDefault(require("../../data-source"));
const photoDestroyerService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const photoRepo = data_source_1.default.getRepository(entities_1.Photo);
    const photo = (yield photoRepo.findOneBy({ id }));
    yield cloudinary_1.v2.uploader.destroy(photo === null || photo === void 0 ? void 0 : photo.public_id);
    yield photoRepo.delete(photo.id);
    return;
});
exports.photoDestroyerService = photoDestroyerService;
