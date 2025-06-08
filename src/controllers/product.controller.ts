import { Request, Response } from "express";
import * as s from "../services/products/";
import { TRegisterProductRequest } from "../interfaces/product";
import { getSellerDataByIdService, photoUploaderService } from "../services";

export const registerProductController = async (
  req: Request,
  res: Response
) => {
  const sellerId = req.user.id;
  const files = req.files as Express.Multer.File[];
  const data: TRegisterProductRequest = req.body;

  const seller = await getSellerDataByIdService(sellerId);
  const photos = await photoUploaderService(files, seller);
  const product = await s.registerProductService(seller, data, photos);

  res.status(201).json(product);
};

export const getProductsController = async (req: Request, res: Response) => {
  const { offset = 0, limit = 40, search } = req.query;
  const products = await s.getProductsService(
    Number(offset),
    Number(limit),
    search && String(search)
  );

  res.status(200).json(products);
};

export const getProductsBySellerIdController = async (
  req: Request,
  res: Response
) => {
  const sellerId = req.params.id;
  const { offset = 0, limit = 40 } = req.query;
  const products = await s.getProductsBySellerIdService(
    sellerId,
    Number(offset),
    Number(limit)
  );
  res.status(200).json(products);
};

export const updateProductController = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;
  const updateData = await s.updateProductService(id, data);

  res.status(200).json(updateData);
};

export const deactivateProductAddController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  await s.deactivateProductAddService(id);
  res.status(204).send();
};

export const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await s.deleteProductService(id);
  res.status(204).send();
};
