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
exports.verifyDuplicatedEmail = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const appError_1 = require("../errors/appError");
const verifyDuplicatedEmail = (entity) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const userRepo = data_source_1.default.getRepository(entity);
    const errorMessage = "Email already being used!";
    const emailAlreadyBeingUsed = yield userRepo.findOneBy({ email: email });
    if (emailAlreadyBeingUsed)
        throw new appError_1.AppError(errorMessage, 409);
    return next();
});
exports.verifyDuplicatedEmail = verifyDuplicatedEmail;
