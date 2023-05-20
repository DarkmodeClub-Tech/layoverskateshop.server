import AppDataSource from "../../data-source";
import { Cart, CartProduct } from "../../entities";
import { AppError } from "../../errors/appError";
import { TProduct } from "../../interfaces/product";
import { retrieveCartService } from "../cart";
import { createCartProductsService } from "../cartProducts/create";
import { retrieveProductService } from "../products";

export const insertProductsInCartService = async (
  cart: Cart,
  products: TProduct[]
) => {
  let cartUpdated: Cart = cart;
  const cartProductRepo = AppDataSource.getRepository(CartProduct);

  for (const p of products) {
    let product = await retrieveProductService(p.product_id);

    if (p.amount > product.stock_amount) {
      throw new AppError(
        `There is only ${product.stock_amount} unities of ${product.title}`
      );
    }

    let cartProduct = cart.products.find((cp) => cp.product.id === product.id);
    if (cartProduct) {
      const cart_amount = { cart_amount: p.amount };
      await cartProductRepo.update(cartProduct.id, cart_amount);
    } else {
      await createCartProductsService(cart, product, p.amount);
    }
    cartUpdated = await retrieveCartService(cart.id);
  }
  return cartUpdated;
};
