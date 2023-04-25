import { Router } from "express";
import {
  deleteUserController,
  registerUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers/user.controllers";
import {
  verifyDuplicatedCPF,
  verifyDuplicatedEmail,
  verifyDuplicatedUsername,
} from "../middlewares";
import { authenticationMiddleware } from "../middlewares/authentication.middleware";

export const userRouter = Router();

userRouter.post(
  "/register",
  verifyDuplicatedCPF,
  verifyDuplicatedEmail,
  verifyDuplicatedUsername,
  registerUserController
);
userRouter.get("/retrieve", authenticationMiddleware, retrieveUserController);
userRouter.patch("/update", updateUserController);
userRouter.delete("/destroy", deleteUserController);
