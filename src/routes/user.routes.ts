import { Router } from "express";
import {
  deleteUserController,
  registerUserController,
  updateUserController,
} from "../controllers/user.controllers";

export const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.patch("/update", updateUserController);
userRouter.delete("/destroy", deleteUserController);
