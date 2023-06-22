import AppDataSource from "../../data-source";
import { Cart, CartProduct, Product } from "../../entities";

export const createCartProductsService = async (
  cart: Cart,
  product: Product,
  amount: number,
  requested_colors: string[],
  requested_sizes: string[]
): Promise<CartProduct> => {
  const cartProductRepo = AppDataSource.getRepository(CartProduct);
  const cartProduct = cartProductRepo.create({
    cart: cart,
    product: product,
    cart_amount: amount,
    requested_colors: requested_colors,
    requested_sizes: requested_sizes,
  });

  await cartProductRepo.save(cartProduct);
  return cartProduct;
};
