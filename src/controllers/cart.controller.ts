import { Request, Response } from "express";
import * as s from "../services/cart";
import * as sc from "../services/customer";
import * as scp from "../services/cartProducts/delete";

export const createCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.user;
  const cart = await s.createCartService();
  return res.status(201).json(cart);
};

export const insertProductsCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.user;
  const { cart } = await sc.retrieveCustomerService(id);
  const { products } = req.body;
  const cartProducts = await s.addProductsToCartService(cart, products);
  return res.status(200).json(cartProducts);
};

export const removeProductsFromCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { products_ids } = req.body;
  const { id } = req.user;
  const { cart } = await sc.retrieveCustomerService(id);
  await s.removeProductsFromCartService(cart, products_ids);
  return res.status(200).send();
};
