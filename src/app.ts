import "reflect-metadata";
// import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import * as r from "./routes";
import handleErrorMiddleware from "./middlewares/handleError";

const app: Application = express();

const corsOptions = {
  origin: [
    "https://layoverskateshop.vercel.app",
    "https://layoverskateshop.admview.vercel.app",
    `https://lvr-server-5ud7.onrender.com`,
    "http://localhost:3001",
  ],
};
app.use(express.json());
app.use(cors(corsOptions));

app.use("/sellers", r.sellerRouter);
app.use("/customers", r.customerRouter);
app.use("/products", r.productRouter);
app.use("/categories", r.categoryRouter);
app.use("/cart", r.cartRouter);
app.use("/photos", r.imageRouter);

app.use(handleErrorMiddleware);

export default app;
