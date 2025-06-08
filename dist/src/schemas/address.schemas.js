"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddressSchema = exports.registerAddressSchema = void 0;
const zod_1 = require("zod");
exports.registerAddressSchema = zod_1.z.object({
    cep: zod_1.z.string(),
    street: zod_1.z.string(),
    number: zod_1.z.number(),
    complement: zod_1.z.string().optional(),
    district: zod_1.z.string(),
    state: zod_1.z.string(),
    city: zod_1.z.string(),
});
exports.updateAddressSchema = zod_1.z.object({
    cep: zod_1.z.string().optional(),
    street: zod_1.z.string().optional(),
    number: zod_1.z.number().optional(),
    complement: zod_1.z.string().optional(),
    district: zod_1.z.string().optional(),
    state: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
});
