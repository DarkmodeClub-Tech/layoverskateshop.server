import AppDataSource from "../../data-source";
import { Cart } from "../../entities/";
import { TProduct } from "../../interfaces/product";
import { addProductsToCartService } from "./addProducts";

export const createCartService = async (
  products?: TProduct[]
): Promise<Cart> => {
  const cartRepo = AppDataSource.getRepository(Cart);
  let cart: Cart = new Cart();
  await cartRepo.save(cart);

  if (products) {
    cart = await addProductsToCartService(cart, products);
  }
  return cart;
};
