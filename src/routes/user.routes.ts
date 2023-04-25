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
import { customerIdValidator } from "../middlewares/customerIDValidator.middleware";

export const userRouter = Router();

userRouter.post(
  "/register",
  verifyDuplicatedCPF,
  verifyDuplicatedEmail,
  verifyDuplicatedUsername,
  registerUserController
);
userRouter.get(
  "/retrieve",
  authenticationMiddleware,
  customerIdValidator,
  retrieveUserController
);
userRouter.patch(
  "/update",
  authenticationMiddleware,
  customerIdValidator,
  updateUserController
);
userRouter.patch(
  "/deactivate",
  authenticationMiddleware,
  customerIdValidator,
  deactivateAccountController
);
userRouter.delete(
  "/destroy",
  authenticationMiddleware,
  customerIdValidator,
  deleteAccountController
);
