import { Request, Response } from "express";
import {
  getCategoriesService,
  registerCategoryService,
} from "../services/category";
import { Category } from "../entities";

export const registerCategoryController = async (
  req: Request,
  res: Response
) => {
  const data: Category = req.body;
  const category = await registerCategoryService(data);
  return res.status(201).json(category);
};

export const getCategoriesController = async (req: Request, res: Response) => {
  const { offset = 0, limit = 100 } = req.query;
  const categories = await getCategoriesService(Number(offset), Number(limit));

  return res.status(200).json(categories);
};
