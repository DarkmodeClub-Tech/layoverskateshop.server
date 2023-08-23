import { Router } from "express";
import * as m from "../middlewares";
import * as c from "../controllers/product.controller";
import * as s from "../schemas/products.schemas";

export const productRouter = Router();

productRouter.post(
  "/register",
  m.authenticationMiddleware,
  m.verifyAdmPermissionMiddleware,
  m.uploadFileMiddleware.array("photos", 6),
  m.validateRequestBodyMiddleware(s.registerProductRequestSchema),
  c.registerProductController
);

productRouter.get("/", c.getProductsController);

productRouter.patch("/update/:id", c.updateProductController);

productRouter.patch("/deactivate/:id", c.deactivateProductAddController);
productRouter.delete("/destroy/:id", c.deleteProductController);
