import { Router } from "express";
import { registerCategoryController } from "../controllers/category.controllers";

export const categoryRouter = Router();

categoryRouter.post("/register", registerCategoryController);
