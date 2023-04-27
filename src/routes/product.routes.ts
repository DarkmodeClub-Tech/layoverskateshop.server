import { Router } from "express";
import { uploadFileMiddleware } from "../middlewares";
import { registerProductController } from "../controllers/product.controller";
import { authenticationMiddleware } from "../middlewares/authentication.middleware";

export const productRouter = Router();

productRouter.post(
  "/register",
  // authenticationMiddleware,
  uploadFileMiddleware.array("photos"),
  registerProductController
);
