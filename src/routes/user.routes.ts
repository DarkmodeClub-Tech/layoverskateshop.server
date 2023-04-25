import { Router } from "express";
import {
  deactivateAccountController,
  deleteAccountController,
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
userRouter.patch("/update", authenticationMiddleware, updateUserController);
userRouter.patch(
  "/deactivate",
  authenticationMiddleware,
  deactivateAccountController
);
userRouter.delete(
  "/destroy",
  authenticationMiddleware,
  deleteAccountController
);
