import { Request, Response } from "express";
import {
  getProductsService,
  registerProductService,
  updateProductService,
  deactivateProductAddService,
  deleteProductService,
} from "../services/products/";
import { Product } from "../entities";
import { RepositoryNotTreeError } from "typeorm";

export const registerProductController = async (
  req: Request,
  res: Response
) => {
  const files = req.files as Express.Multer.File[];
  const data: Product = req.body;
  const product = await registerProductService(data, files);

  return res.status(201).json(product);
};

export const getProductsController = async (req: Request, res: Response) => {
  const { offset = 0, limit = 100 } = req.query;
  const products = await getProductsService(Number(offset), Number(limit));

  return res.status(200).json(products);
};

export const updateProductController = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;
  const updateData = await updateProductService(id, data);

  return res.status(200).json(updateData);
};

export const deactivateProductAddController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  await deactivateProductAddService(id);
  return res.status(204).send();
};

export const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteProductService(id);
  return res.status(204).send();
};
