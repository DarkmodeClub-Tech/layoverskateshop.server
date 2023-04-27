import { Request, Response } from "express";
import { registerProductService } from "../services/products/register";
import { Product } from "../entities";
import { photoUploaderService } from "../services/photos";

export const registerProductController = async (
  req: Request,
  res: Response
) => {
  const files = req.files as Express.Multer.File[];
  const data: Product = req.body;

  const product = await registerProductService(data, files);

  return res.status(201).json(product);
};
