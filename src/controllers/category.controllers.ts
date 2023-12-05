import { Request, Response } from "express";
import * as s from "../services";
import { Category, Photo } from "../entities";

export const registerCategoryController = async (
  req: Request,
  res: Response
) => {
  const { title }: { title: string } = req.body;

  const category = await s.registerCategoryService(title);
  return res.status(201).json(category);
};

export const getCategoriesController = async (req: Request, res: Response) => {
  const { offset, limit } = req.query;
  const categories = await s.getCategoriesService(
    Number(offset),
    Number(limit)
  );

  return res.status(200).json(categories);
};

export const updateCategoryController = async (req: Request, res: Response) => {
  const data: Category = req.body;
  const { id } = req.params;
  const updatedData = await s.updateCategoryService(id, data);

  return res.status(200).json(updatedData);
};

export const deleteCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await s.deleteCategoryService(id);
  return res.status(204).send();
};
