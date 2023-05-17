import AppDataSource from "../../data-source";
import { Customer, Cart, Product, CartToProducts } from "../../entities/";
import { createCartProductsService } from "../cartToProducts/create";
import { retrieveUserService } from "../customer";

export const createCartService = async (
  products: Product[] = []
): Promise<Cart> => {
  const cartRepo = AppDataSource.getRepository(Cart);

  const cart: Cart = new Cart();
  const cartProducts: CartToProducts[] = [];

  if (products.length > 0) {
    products.map(async (p) => {
      let cartProduct = await createCartProductsService(cart, p);
      cartProducts.push(cartProduct);
      cart.cart_to_product = cartProducts;
      await cartRepo.save(cart);
    });
  }

  return cart;
};
