"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCategorySchema = void 0;
const zod_1 = require("zod");
exports.registerCategorySchema = zod_1.z.object({ title: zod_1.z.string() });
