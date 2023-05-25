import { Request, Response } from "express";
import {
  createCartService,
  insertProductsInCartService,
  retrieveCartService,
  removeProductsFromCartService,
} from "../services/cart";
import { retrieveCustomerService } from "../services/customer";
import { Cart, Customer } from "../entities";
import { deleteCartProductService } from "../services/cartProducts/delete";

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
  const { cart }: Customer = await retrieveCustomerService(id);
  const { products } = req.body;
  const cartProducts = await insertProductsInCartService(cart, products);
  return res.status(200).json(cartProducts);
};

export const removeProductsFromCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { products_ids } = req.body;
  const { id } = req.user;
  const { cart } = await retrieveCustomerService(id);
  await removeProductsFromCartService(cart, products_ids);
  return res.status(200).send();
};
