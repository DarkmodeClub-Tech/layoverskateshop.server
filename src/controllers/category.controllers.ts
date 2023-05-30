import { Request, Response } from "express";
import {
  getCategoriesService,
  registerCategoryService,
  updateCategoryService,
  deleteCategoryService,
} from "../services/category";
import { Category } from "../entities";
import { TRegisterCategoryRequest } from "../interfaces/category";

export const registerCategoryController = async (
  req: Request,
  res: Response
) => {
  const data: TRegisterCategoryRequest = req.body;
  const category = await registerCategoryService(data.title);
  return res.status(201).json(category);
};

export const getCategoriesController = async (req: Request, res: Response) => {
  const { offset = 0, limit = 100 } = req.query;
  const categories = await getCategoriesService(Number(offset), Number(limit));

  return res.status(200).json(categories);
};

export const updateCategoryController = async (req: Request, res: Response) => {
  const data: Category = req.body;
  const { id } = req.params;
  const updatedData = await updateCategoryService(id, data);

  return res.status(200).json(updatedData);
};

export const deleteCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteCategoryService(id);
  return res.status(204).send();
};
