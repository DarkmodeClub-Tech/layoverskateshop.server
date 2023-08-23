import { Router } from "express";
import * as c from "../controllers/category.controllers";

export const categoryRouter = Router();

categoryRouter.post("/register", c.registerCategoryController);
categoryRouter.get("", c.getCategoriesController);
categoryRouter.patch("/update/:id", c.updateCategoryController);
categoryRouter.delete("/destroy/:id", c.deleteCategoryController);
