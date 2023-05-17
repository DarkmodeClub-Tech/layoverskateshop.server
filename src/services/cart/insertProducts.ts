import AppDataSource from "../../data-source";
import { Cart, CartToProducts, Product } from "../../entities";
import { retrieveCartService } from "../cart";
import { createCartProductsService } from "../cartToProducts/create";
import { retrieveProductService } from "../products";

export const insertProductsCartService = async (
  cart_id: string,
  products_id: string[]
): Promise<Cart | CartToProducts> => {
  const cartRepo = AppDataSource.getRepository(Cart);
  const cartTOProductsRepo = AppDataSource.getRepository(CartToProducts);
  const cart: Cart = await retrieveCartService(cart_id);

  products_id.map(async (product_id) => {
    let product = await retrieveProductService(product_id);

    const cartToProduct = await createCartProductsService(cart, product);
    cart.cart_to_product.push(cartToProduct);
    await cartRepo.save(cart);
  });

  return cart;
};
