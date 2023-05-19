import { Request, Response } from "express";
import {
  createCartService,
  insertProductsInCartService,
} from "../services/cart";
import { retrieveUserService } from "../services/customer";
import { Customer } from "../entities";

export const createCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.user;
  const cart = await createCartService();
  return res.status(201).json(cart);
};

export const insertProductsCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.user;
  const { products } = req.body;
  const cartProducts = await insertProductsInCartService(id, products);
  return res.status(200).json(cartProducts);
};
