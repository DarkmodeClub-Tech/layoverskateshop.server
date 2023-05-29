import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import {
  categoryRouter,
  customerRouter,
  productRouter,
  sellerRouter,
} from "./routes/index.routes";
import handleErrorMiddleware from "./middlewares/handleError";
import { cartRouter } from "./routes/cart.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/sellers", sellerRouter);
app.use("/customers", customerRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/cart", cartRouter);

app.use(handleErrorMiddleware);

export default app;
