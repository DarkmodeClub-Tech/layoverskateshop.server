import AppDataSource from "../../data-source";
import { Cart } from "../../entities";

export const retrieveCartService = async (cart_id: string): Promise<Cart> => {
  const cartRepo = AppDataSource.getRepository(Cart);
  const cart = await cartRepo.findOneBy({ id: cart_id });
  return cart as Cart;
};
