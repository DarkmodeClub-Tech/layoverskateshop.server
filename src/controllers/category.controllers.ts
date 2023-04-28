import { Request, Response } from "express";
import { registerCategoryService } from "../services/category";
import { Category } from "../entities";

export const registerCategoryController = async (
  req: Request,
  res: Response
) => {
  const data: Category = req.body;
  const category = await registerCategoryService(data);
  return res.status(201).json(category);
};
