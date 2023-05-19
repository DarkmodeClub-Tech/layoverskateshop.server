import AppDataSource from "../../data-source";
import { Cart, CartProduct, Product } from "../../entities";

export const createCartProductsService = async (
  cart: Cart,
  product: Product
): Promise<CartProduct> => {
  const cartProductRepo = AppDataSource.getRepository(CartProduct);

  let cartProduct = cart.products.find((cp) => cp.product.id === product.id);

  if (cartProduct) {
    cartProduct.amount++;
    await cartProductRepo.save(cartProduct);
    cartProduct = (await cartProductRepo.findOneBy({
      id: cartProduct.id,
    })) as CartProduct;
    return cartProduct;
  } else {
    cartProduct = new CartProduct();
    cartProduct.cart = cart;
    cartProduct.product = product;
    cartProduct.amount = 1;
    await cartProductRepo.save(cartProduct);
    cartProduct = (await cartProductRepo.findOneBy({
      id: cartProduct.id,
    })) as CartProduct;
  }
  return cartProduct;
};
