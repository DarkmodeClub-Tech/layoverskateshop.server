import AppDataSource from "../../data-source";
import { Cart, CartProduct, Product } from "../../entities";

export const createCartProductsService = async (
  cart: Cart,
  product: Product,
  amount: number
): Promise<CartProduct> => {
  const cartProductRepo = AppDataSource.getRepository(CartProduct);
  const cartProduct = cartProductRepo.create({
    cart: cart,
    product: product,
    cart_amount: amount,
  });

  await cartProductRepo.save(cartProduct);
  return cartProduct;
};
