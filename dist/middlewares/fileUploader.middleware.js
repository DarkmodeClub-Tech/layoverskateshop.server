"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const appError_1 = require("../errors/appError");
const storage = multer_1.default.diskStorage({
    destination: "uploads/",
    filename: (request, file, callback) => {
        const filename = `${file.originalname}`;
        return callback(null, filename);
    },
});
const fileFilter = (req, file, callback) => {
    var _a;
    const fileName = file.originalname.split(".");
    const fileExtension = (_a = fileName.pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const allowedExtensions = ["png", "jpeg", "jpg", "gif"];
    if (!allowedExtensions.includes(fileExtension)) {
        return callback(new appError_1.AppError(`This file extension is invalid ${fileExtension}`));
    }
    return callback(null, true);
};
exports.uploadFileMiddleware = (0, multer_1.default)({
    storage: storage,
    fileFilter: fileFilter,
});
