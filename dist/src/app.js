"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const handleError_1 = __importDefault(require("./middlewares/handleError"));
const cart_routes_1 = require("./routes/cart.routes");
const app = (0, express_1.default)();
const corsOptions = {
    origin: [
        "https://layoverskateshop.vercel.app",
        "https://layoverskateshop.admview.vercel.app",
        "https://layover-skateshop.onrender.com",
        "http://localhost:3000",
    ],
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use("/sellers", routes_1.sellerRouter);
app.use("/customers", routes_1.customerRouter);
app.use("/products", routes_1.productRouter);
app.use("/categories", routes_1.categoryRouter);
app.use("/cart", cart_routes_1.cartRouter);
app.use("/photos", routes_1.imageRouter);
app.use(handleError_1.default);
exports.default = app;
