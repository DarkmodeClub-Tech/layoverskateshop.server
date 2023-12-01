import { Router } from "express";
import * as m from "../middlewares";
import * as c from "../controllers/";
import * as s from "../schemas/";

const productRouter = Router();

productRouter.post(
  "/register",
  m.authenticationMiddleware,
  m.verifyAdmPermissionMiddleware,
  m.uploadFileMiddleware.array("photos", 6),
  m.validateRequestBodyMiddleware(s.registerProductRequestSchema),
  c.registerProductController
);

productRouter.get("/", c.getProductsController);

productRouter.get("/sellers/:id", c.getProductsBySellerIdController);

productRouter.patch(
  "/update/:id",
  m.authenticationMiddleware,
  m.verifyAdmPermissionMiddleware,
  c.updateProductController
);

productRouter.patch(
  "/deactivate/:id",
  m.authenticationMiddleware,
  m.verifyAdmPermissionMiddleware,
  c.deactivateProductAddController
);

productRouter.delete(
  "/destroy/:id",
  m.authenticationMiddleware,
  m.verifyAdmPermissionMiddleware,
  c.deleteProductController
);

export default productRouter;
