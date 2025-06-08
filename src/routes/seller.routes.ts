import { Router } from "express";
import { Seller } from "../entities";

import * as m from "../middlewares";
import * as c from "../controllers/";

const sellerRouter = Router();

sellerRouter.get("/products", c.getGlobalSellerCategoriesAndProductsController);

sellerRouter.get("/:id", c.getSellerDataByIdController);

sellerRouter.get(
  "/retrieve",
  m.authenticationMiddleware,
  m.userIdValidator(Seller),
  c.getSellerDataController
);

sellerRouter.post(
  "/register",
  m.verifyDuplicatedUsername(Seller),
  m.verifyDuplicatedCPF(Seller),
  m.verifyDuplicatedEmail(Seller),
  c.registerSellerController
);

sellerRouter.post("/auth", c.loginSellerController);

sellerRouter.patch(
  "/update",
  m.authenticationMiddleware,
  m.verifyAdmPermissionMiddleware,
  c.updateSellerController
);

sellerRouter.post(
  "/photos",
  m.authenticationMiddleware,
  m.verifyAdmPermissionMiddleware,
  m.uploadFileMiddleware.array("photos", 6),
  c.savePhotosController
);

sellerRouter.post(
  "/avatar",
  m.authenticationMiddleware,
  m.uploadFileMiddleware.single("photo"),
  c.addAvatarPhotoController
);

export default sellerRouter;
