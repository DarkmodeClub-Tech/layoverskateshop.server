import AppDataSource from "../../data-source";
import { Cart, Product, CartProduct } from "../../entities/";
import { createCartProductsService } from "../cartProducts/create";

export const createCartService = async (
  products: Product[] = []
): Promise<Cart> => {
  const cartRepo = AppDataSource.getRepository(Cart);

  const cart: Cart = new Cart();

  if (products.length > 0) {
    products.map(async (p) => {
      await createCartProductsService(cart, p);
    });
  }

  await cartRepo.save(cart);

  return cart;
};
