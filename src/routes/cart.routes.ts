import { Router } from "express";
import {
  createCartController,
  insertProductsCartController,
  removeProductsFromCartController,
} from "../controllers/cart.controllers";
import { authenticationMiddleware } from "../middlewares/";

export const cartRouter: Router = Router();

cartRouter.post("/register", authenticationMiddleware, createCartController);
cartRouter.post(
  "/products",
  authenticationMiddleware,
  insertProductsCartController
);
cartRouter.delete(
  "/remove",
  authenticationMiddleware,
  removeProductsFromCartController
);
