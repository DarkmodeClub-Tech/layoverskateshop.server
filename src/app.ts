import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { userRouter } from "./routes/index.routes";
import handleErrorMiddleware from "./middlewares/handleError";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

app.use(handleErrorMiddleware);

export default app;
