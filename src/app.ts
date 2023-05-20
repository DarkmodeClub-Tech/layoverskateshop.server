import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import {
  categoryRouter,
  customerRouter,
  loginRouter,
  productRouter,
} from "./routes/index.routes";
import handleErrorMiddleware from "./middlewares/handleError";
import { cartRouter } from "./routes/cart.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/customers", customerRouter);
app.use("/login", loginRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/cart", cartRouter);

app.use(handleErrorMiddleware);

export default app;
