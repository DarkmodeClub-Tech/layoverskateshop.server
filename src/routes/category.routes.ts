import { Router } from "express";
import {
  registerCategoryController,
  getCategoriesController,
} from "../controllers/category.controllers";

export const categoryRouter = Router();

categoryRouter.post("/register", registerCategoryController);
categoryRouter.get("", getCategoriesController);
