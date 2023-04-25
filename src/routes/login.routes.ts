import { Router } from "express";
import { loginController } from "../controllers/login.controllers";

export const loginRouter = Router();

loginRouter.post("/auth", loginController);
