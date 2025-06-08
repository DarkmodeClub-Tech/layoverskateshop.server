import { Request, Response } from "express";
import * as s from "../services";
import { Category, Photo } from "../entities";

export const registerCategoryController = async (
  req: Request,
  res: Response
) => {
  const { title }: { title: string } = req.body;

  const category = await s.registerCategoryService(title);
  res.status(201).json(category);
  return;
};

export const getCategoriesController = async (req: Request, res: Response) => {
  const { offset, limit } = req.query;
  const categories = await s.getCategoriesService(
    Number(offset),
    Number(limit)
  );

  res.status(200).json(categories);
  return;
};

export const updateCategoryController = async (req: Request, res: Response) => {
  const data: Category = req.body;
  const { id } = req.params;
  const updatedData = await s.updateCategoryService(id, data);

  res.status(200).json(updatedData);
  return;
};

export const deleteCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await s.deleteCategoryService(id);
  res.status(204).send();
  return;
};
