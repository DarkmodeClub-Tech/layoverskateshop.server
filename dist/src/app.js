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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const r = __importStar(require("./routes"));
const handleError_1 = __importDefault(require("./middlewares/handleError"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: [
        "https://layoverskateshop.vercel.app",
        "https://layoverskateshop.admview.vercel.app",
        `https://lvr-server-5ud7.onrender.com`,
        "http://localhost:3001",
    ],
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use("/sellers", r.sellerRouter);
app.use("/customers", r.customerRouter);
app.use("/products", r.productRouter);
app.use("/categories", r.categoryRouter);
app.use("/cart", r.cartRouter);
app.use("/photos", r.imageRouter);
app.use(handleError_1.default);
exports.default = app;
