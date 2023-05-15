import AppDataSource from "../../data-source";
import { Cart, Product } from "../../entities";
import { retrieveCartService } from "../cart";
import { retrieveProductService } from "../products";

export const insertProductsCartService = async (
  cart_id: string,
  products_id: string[]
): Promise<Cart> => {
  const cartRepo = AppDataSource.getRepository(Cart);
  const cart: Cart = await retrieveCartService(cart_id);

  products_id.map(async (product_id) => {
    let product = await retrieveProductService(product_id);
    cart.products.push(product);
    await cartRepo.save(cart);
  });

  return cart;
};
