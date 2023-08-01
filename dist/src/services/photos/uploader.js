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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoUploaderService = void 0;
const cloudinary_1 = require("cloudinary");
const fs = __importStar(require("fs"));
require("dotenv/config");
const appError_1 = require("../../errors/appError");
const entities_1 = require("../../entities");
const data_source_1 = __importDefault(require("../../data-source"));
const photoUploaderService = (files) => __awaiter(void 0, void 0, void 0, function* () {
    const photoRepo = data_source_1.default.getRepository(entities_1.Photo);
    const savedPhotos = [];
    for (const file of files) {
        const upload = yield cloudinary_1.v2.uploader.upload(file.path);
        const photo = photoRepo.create({
            public_id: upload.public_id,
            url: cloudinary_1.v2.url(upload.public_id),
        });
        yield photoRepo.save(photo);
        savedPhotos.push(photo);
        fs.unlink(file.path, (error) => {
            if (error)
                throw new appError_1.AppError(error.message);
        });
    }
    return savedPhotos;
});
exports.photoUploaderService = photoUploaderService;
