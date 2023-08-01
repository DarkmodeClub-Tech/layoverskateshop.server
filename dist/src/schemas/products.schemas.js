"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerProductRequestSchema = void 0;
const zod_1 = require("zod");
exports.registerProductRequestSchema = zod_1.z.object({
    title: zod_1.z.string(),
    price: zod_1.z.string(),
    description: zod_1.z.string(),
    max_installments: zod_1.z.string(),
    stock_amount: zod_1.z.string(),
    category: zod_1.z.string(),
    available_sizes: zod_1.z.array(zod_1.z.string()),
    available_colors: zod_1.z.array(zod_1.z.string()),
});
