"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAddressSchema = void 0;
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
