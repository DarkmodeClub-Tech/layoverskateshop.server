import AppDataSource from "../../data-source";
import { Cart } from "../../entities/";
import { TCartProduct } from "../../interfaces/";
import { addProductsToCartService } from "./addProducts";

export const createCartService = async (
  products?: TCartProduct[]
): Promise<Cart> => {
  const cartRepo = AppDataSource.getRepository(Cart);
  let cart: Cart = new Cart();
  await cartRepo.save(cart);

  if (products) {
    cart = await addProductsToCartService(cart, products);
  }
  return cart;
};
