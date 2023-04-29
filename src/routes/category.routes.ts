import { Router } from "express";
import {
  registerCategoryController,
  getCategoriesController,
  updateCategoryController,
} from "../controllers/category.controllers";

export const categoryRouter = Router();

categoryRouter.post("/register", registerCategoryController);
categoryRouter.get("", getCategoriesController);
categoryRouter.patch("/update/:id", updateCategoryController);
