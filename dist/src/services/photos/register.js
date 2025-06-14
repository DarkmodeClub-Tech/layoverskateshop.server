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
exports.registerPhoto = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities");
const appError_1 = require("../../errors/appError");
const registerPhoto = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { public_id, url, owner, product } = data;
    if (!owner)
        throw new appError_1.AppError("owner is required", 400);
    const photosRepo = data_source_1.default.getRepository(entities_1.Photo);
    let newPhoto = photosRepo.create({
        public_id,
        url,
        owner,
        product,
    });
    yield photosRepo.save(newPhoto);
    return newPhoto;
});
exports.registerPhoto = registerPhoto;
