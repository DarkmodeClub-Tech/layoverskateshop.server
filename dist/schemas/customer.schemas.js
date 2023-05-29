"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerRequestSchema = exports.loginCustomerRequestSchema = exports.registerCustomerRequestSchema = void 0;
const zod_1 = require("zod");
const address_schemas_1 = require("./address.schemas");
exports.registerCustomerRequestSchema = zod_1.z.object({
    username: zod_1.z.string(),
    first_name: zod_1.z.string(),
    last_name: zod_1.z.string(),
    cpf: zod_1.z.string(),
    email: zod_1.z.string().email("Invalid email format."),
    phone: zod_1.z.string(),
    password: zod_1.z.string(),
    address: address_schemas_1.registerAddressSchema,
});
exports.loginCustomerRequestSchema = zod_1.z.object({
    username: zod_1.z.string().optional(),
    email: zod_1.z.string().email("Invalid email format.").optional(),
    password: zod_1.z.string(),
});
exports.updateCustomerRequestSchema = zod_1.z.object({
    username: zod_1.z.string().optional(),
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
    cpf: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    password: zod_1.z.string().optional(),
    address: address_schemas_1.registerAddressSchema.partial(),
});
