import { Request, Response } from "express";
import * as s from "../services/products/";
import { TRegisterProductRequest } from "../interfaces/product";

export const registerProductController = async (
  req: Request,
  res: Response
) => {
  const files = req.files as Express.Multer.File[];
  const data: TRegisterProductRequest = req.body;
  const product = await s.registerProductService(data, files);

  return res.status(201).json(product);
};

export const getProductsController = async (req: Request, res: Response) => {
  const { offset = 0, limit = 100, search } = req.query;
  const products = await s.getProductsService(
    Number(offset),
    Number(limit),
    search && String(search)
  );

  return res.status(200).json(products);
};

export const updateProductController = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;
  const updateData = await s.updateProductService(id, data);

  return res.status(200).json(updateData);
};

export const deactivateProductAddController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  await s.deactivateProductAddService(id);
  return res.status(204).send();
};

export const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await s.deleteProductService(id);
  return res.status(204).send();
};
