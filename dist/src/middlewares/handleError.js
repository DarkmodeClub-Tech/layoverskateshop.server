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
const appError_1 = require("../errors/appError");
const zod_1 = require("zod");
const handleErrorMiddleware = (error, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (error instanceof appError_1.AppError) {
        res.status(error.statusCode).json({
            message: error.message,
        });
        return;
    }
    if (error instanceof zod_1.ZodError) {
        res.status(500).json({
            message: error.errors,
        });
        return;
    }
    res.status(500).json({
        message: "Internal server error",
    });
    return;
});
exports.default = handleErrorMiddleware;
