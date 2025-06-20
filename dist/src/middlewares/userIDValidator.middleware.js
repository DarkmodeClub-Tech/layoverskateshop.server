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
exports.userIdValidator = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const appError_1 = require("../errors/appError");
const userIdValidator = (entity) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(entity);
    const { id } = req.user;
    const account = yield userRepo.findOneBy({ id: id });
    const errorMessage = "Not found";
    if (!account)
        throw new appError_1.AppError(errorMessage, 404);
    return next();
});
exports.userIdValidator = userIdValidator;
