import AppDataSource from "../../data-source";
import { Cart, CartProduct, Customer, Product } from "../../entities";
import { retrieveCartService } from "../cart";
import { createCartProductsService } from "../cartProducts/create";
import { retrieveUserService } from "../customer";
import { retrieveProductService } from "../products";

export const insertProductsInCartService = async (
  customer_id: string,
  products_ids: string[]
) => {
  const { cart }: Customer = await retrieveUserService(customer_id);

  products_ids.map(async (pId) => {
    let product = await retrieveProductService(pId);
    await createCartProductsService(cart, product);
  });

  const newCart = await AppDataSource.manager.findOneBy(Cart, { id: cart.id });
  return newCart;
};
