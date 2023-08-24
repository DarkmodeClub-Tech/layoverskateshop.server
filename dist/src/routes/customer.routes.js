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
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express_1 = require("express");
const entities_1 = require("../entities");
const c = __importStar(require("../controllers/customer.controllers"));
const m = __importStar(require("../middlewares"));
const s = __importStar(require("../schemas/customer.schemas"));
exports.customerRouter = (0, express_1.Router)();
exports.customerRouter.post("/auth", m.validateRequestBodyMiddleware(s.loginCustomerRequestSchema), c.loginCustomerController);
exports.customerRouter.post("/register", m.validateRequestBodyMiddleware(s.registerCustomerRequestSchema), m.verifyDuplicatedCPF(entities_1.Customer), m.verifyDuplicatedEmail(entities_1.Customer), m.verifyDuplicatedUsername(entities_1.Customer), c.registerCustomerController);
exports.customerRouter.get("/retrieve", m.authenticationMiddleware, m.userIdValidator(entities_1.Customer), c.retrieveCustomerController);
exports.customerRouter.patch("/update", m.authenticationMiddleware, m.validateRequestBodyMiddleware(s.updateCustomerRequestSchema.partial()), m.verifyDuplicatedCPF(entities_1.Customer), m.verifyDuplicatedEmail(entities_1.Customer), m.verifyDuplicatedUsername(entities_1.Customer), m.userIdValidator(entities_1.Customer), c.updateCustomerController);
exports.customerRouter.patch("/deactivate", m.authenticationMiddleware, m.userIdValidator(entities_1.Customer), c.deactivateAccountController);
exports.customerRouter.delete("/destroy", m.authenticationMiddleware, m.userIdValidator(entities_1.Customer), c.deleteAccountController);
