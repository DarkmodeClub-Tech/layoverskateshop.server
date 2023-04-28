import { Request, Response } from "express";
import {
  getProductsService,
  registerProductService,
  updateProductService,
} from "../services/products/";
import { Product } from "../entities";

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
