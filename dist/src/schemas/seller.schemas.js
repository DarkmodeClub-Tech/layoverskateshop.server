"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSellerSchema = exports.savePhotoSchema = exports.registerSellerSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
const address_schemas_1 = require("./address.schemas");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email("Invalid email Format.")
        .nonempty("Email is required"),
    password: zod_1.z
        .string()
        .min(8, "Password should have at least 8 caracters.")
        .nonempty("Password is required."),
});
exports.registerSellerSchema = zod_1.z.object({
    username: zod_1.z.string(),
    first_name: zod_1.z.string(),
    last_name: zod_1.z.string(),
    cpf: zod_1.z.string(),
    email: zod_1.z
        .string()
        .email("Invalid email Format.")
        .nonempty("Email is required"),
    password: zod_1.z
        .string()
        .min(8, "Password should have at least 8 caracters.")
        .nonempty("Password is required."),
    phone: zod_1.z.string(),
    address: address_schemas_1.registerAddressSchema,
});
exports.savePhotoSchema = zod_1.z.object({
    id: zod_1.z.string(),
    url: zod_1.z.string(),
    public_id: zod_1.z.string(),
});
exports.updateSellerSchema = zod_1.z.object({
    username: zod_1.z.string().optional(),
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
    cpf: zod_1.z.string().optional(),
    email: zod_1.z.string().email("Invalid email Format.").optional(),
    password: zod_1.z
        .string()
        .min(8, "Password should have at least 8 caracters.")
        .optional(),
    phone: zod_1.z.string().optional(),
    address: address_schemas_1.updateAddressSchema,
    photos: zod_1.z.array(exports.savePhotoSchema).optional(),
});
// {
// 	"username" : "Layover",
// 	"first_name": "lvr",
// 	"last_name": "sk8shop",
// 	"cpf": "01201201201",
// 	"email": "lvr@mail.com",
// 	"phone": "0000000000",
// 	"password": "1234",
// 	"address": {
// 		"cep": "00000000",
// 		"street": "sk8 street",
// 		"number": 358,
// 		"complement": "",
// 		"district": "zepa",
// 		"state": "PB",
// 		"city": "campina grande"
// 	}
// }
