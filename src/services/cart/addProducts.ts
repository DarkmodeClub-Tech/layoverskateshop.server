import AppDataSource from "../../data-source";
import { Cart, CartProduct } from "../../entities";
import { AppError } from "../../errors/appError";
import { TCartProduct } from "../../interfaces/";
import { retrieveCartService } from ".";
import { createCartProductsService } from "../cartProducts/create";
import { retrieveProductService } from "../products";

export const addProductsToCartService = async (
  cart: Cart,
  products: TCartProduct[]
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
      const updates = {
        cart_amount: p.amount,
        requested_colors: p.requested_colors,
        requested_sizes: p.requested_sizes,
      };
      await cartProductRepo.update(cartProduct.id, updates);
    } else {
      await createCartProductsService(
        cart,
        product,
        p.amount,
        p.requested_colors,
        p.requested_sizes
      );
    }
    cartUpdated = await retrieveCartService(cart.id);
  }
  return cartUpdated;
};
