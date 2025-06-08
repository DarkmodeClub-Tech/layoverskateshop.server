import { Router } from "express";
import * as c from "../controllers/image.controller";
import * as m from "../middlewares";

const imageRouter: Router = Router();

imageRouter.post(
  "/upload",
  m.authenticationMiddleware,
  m.verifyAdmPermissionMiddleware,
  m.uploadFileMiddleware.array("photos", 6),
  c.photoUploaderController
);
export default imageRouter;
