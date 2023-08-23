import { Router, RouterOptions } from "express";
import { photoUploaderController } from "../controllers/image.controllers";
import {
  authenticationMiddleware,
  uploadFileMiddleware,
  verifyAdmPermissionMiddleware,
} from "../middlewares";

export const imageRouter: Router = Router();

imageRouter.post(
  "/upload",
  authenticationMiddleware,
  verifyAdmPermissionMiddleware,
  uploadFileMiddleware.array("photos", 6),
  photoUploaderController
);
