import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import {
  customerRouter,
  loginRouter,
  productRouter,
} from "./routes/index.routes";
import handleErrorMiddleware from "./middlewares/handleError";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/customers", customerRouter);
app.use("/login", loginRouter);
app.use("/products", productRouter);

// app.use(handleErrorMiddleware);

export default app;
