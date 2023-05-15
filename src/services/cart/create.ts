import AppDataSource from "../../data-source";
import { Customer, Cart, Product } from "../../entities/";
import { retrieveUserService } from "../customer";

export const createCartService = async (
  products: Product[] = []
): Promise<Cart> => {
  const cartRepo = AppDataSource.getRepository(Cart);

  const cart: Cart = new Cart();
  cart.products = products;

  await cartRepo.save(cart);

  return cart;
};
