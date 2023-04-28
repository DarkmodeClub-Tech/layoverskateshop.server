import { Router } from "express";
import { uploadFileMiddleware } from "../middlewares";
import {
  registerProductController,
  updateProductController,
  getProductsController,
} from "../controllers/product.controller";
import { authenticationMiddleware } from "../middlewares/authentication.middleware";

export const productRouter = Router();

productRouter.post(
  "/register",
  // authenticationMiddleware,
  uploadFileMiddleware.array("photos"),
  registerProductController
);

productRouter.get("/", getProductsController);

productRouter.patch("/update/:id", updateProductController);
