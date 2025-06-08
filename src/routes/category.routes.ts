import { Router } from "express";
import * as c from "../controllers/category.controller";
import * as m from "../middlewares";

const categoryRouter = Router();

categoryRouter.post(
  "/register",
  m.authenticationMiddleware,
  c.registerCategoryController
);

categoryRouter.get("/", c.getCategoriesController);

categoryRouter.patch(
  "/update/:id",
  m.authenticationMiddleware,
  c.updateCategoryController
);

categoryRouter.delete(
  "/destroy/:id",
  m.authenticationMiddleware,
  c.deleteCategoryController
);

export default categoryRouter;
