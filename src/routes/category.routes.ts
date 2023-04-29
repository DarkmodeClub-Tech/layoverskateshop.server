import { Router } from "express";
import {
  registerCategoryController,
  getCategoriesController,
  updateCategoryController,
  deleteCategoryController,
} from "../controllers/category.controllers";

export const categoryRouter = Router();

categoryRouter.post("/register", registerCategoryController);
categoryRouter.get("", getCategoriesController);
categoryRouter.patch("/update/:id", updateCategoryController);
categoryRouter.delete("/destroy/:id", deleteCategoryController);
