import AppDataSource from "../../data-source";
import { Cart, Product, CartProduct } from "../../entities/";
import { TProduct } from "../../interfaces/product";
import { createCartProductsService } from "../cartProducts/create";
import { retrieveProductService } from "../products";

export const createCartService = async (
  products?: TProduct[]
): Promise<Cart> => {
  const cartRepo = AppDataSource.getRepository(Cart);
  const cart: Cart = new Cart();

  if (products) {
    products.map(async (p) => {
      let product = await retrieveProductService(p.product_id);
      await createCartProductsService(cart, product, p.amount);
    });
  }

  await cartRepo.save(cart);
  return cart;
};
