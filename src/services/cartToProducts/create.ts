import AppDataSource from "../../data-source";
import { Cart, CartToProducts, Product } from "../../entities";

export const createCartProductsService = async (
  cart: Cart,
  product: Product
): Promise<CartToProducts> => {
  const cartToProductRepo = AppDataSource.getRepository(CartToProducts);
  let amount: number = 1;

  const cartToProduct = cartToProductRepo.create({
    product: product,
    cart: cart,
    amount: amount,
  });

  await cartToProductRepo.save(cartToProduct);

  return cartToProduct;
};
