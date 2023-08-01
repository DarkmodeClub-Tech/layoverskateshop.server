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
exports.deactivateAccountController = exports.deleteAccountController = exports.updateCustomerController = exports.retrieveCustomerController = exports.registerCustomerController = exports.loginCustomerController = void 0;
const customer_1 = require("../services/customer");
const loginCustomerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const accessToken = yield (0, customer_1.loginCustomerService)(data);
    return res.status(200).json(accessToken);
});
exports.loginCustomerController = loginCustomerController;
const registerCustomerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const user = yield (0, customer_1.registerCustomerService)(data);
    return res.status(201).json(user);
});
exports.registerCustomerController = registerCustomerController;
const retrieveCustomerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const user = yield (0, customer_1.retrieveCustomerService)(id);
    return res.status(200).json(user);
});
exports.retrieveCustomerController = retrieveCustomerController;
const updateCustomerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const data = req.body;
    const updated_user = yield (0, customer_1.updateCustomerService)(id, data);
    return res.status(200).json(updated_user);
});
exports.updateCustomerController = updateCustomerController;
const deleteAccountController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    yield (0, customer_1.deleteAccountService)(id);
    return res.status(204).send();
});
exports.deleteAccountController = deleteAccountController;
const deactivateAccountController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    yield (0, customer_1.deactivateAccountService)(id);
    return res.status(204).send();
});
exports.deactivateAccountController = deactivateAccountController;
