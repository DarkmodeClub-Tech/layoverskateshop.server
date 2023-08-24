import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import * as r from "./routes";
import handleErrorMiddleware from "./middlewares/handleError";

const app = express();

const corsOptions = {
  origin: [
    "layoverskateshop.vercel.app",
    "layoverskateshop.admview.vercel.app",
    "layover-skateshop.onrender.com",
    "localhost",
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
