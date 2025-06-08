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
exports.photoUploaderService = void 0;
require("dotenv/config");
const cloudinary_1 = require("cloudinary");
const fs = __importStar(require("fs"));
const appError_1 = require("../../errors/appError");
const register_1 = require("./register");
const photoUploaderService = (files, owner, product) => __awaiter(void 0, void 0, void 0, function* () {
    const savedPhotos = [];
    for (const file of files) {
        const upload = yield cloudinary_1.v2.uploader.upload(file.path);
        const { public_id } = upload;
        const url = cloudinary_1.v2.url(upload.public_id);
        console.log(upload, "upload");
        const photo = yield (0, register_1.registerPhoto)({
            public_id,
            url,
            owner,
            product,
        });
        console.log(photo, "photo");
        savedPhotos.push(photo);
        console.log(savedPhotos, "photos");
        fs.unlink(file.path, (error) => {
            if (error)
                throw new appError_1.AppError(error.message);
        });
    }
    return savedPhotos;
});
exports.photoUploaderService = photoUploaderService;
