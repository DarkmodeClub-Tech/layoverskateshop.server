"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRouter = void 0;
const express_1 = require("express");
const image_controllers_1 = require("../controllers/image.controllers");
const middlewares_1 = require("../middlewares");
exports.imageRouter = (0, express_1.Router)();
exports.imageRouter.post("/upload", middlewares_1.authenticationMiddleware, middlewares_1.verifyAdmPermissionMiddleware, middlewares_1.uploadFileMiddleware.array("photos", 6), image_controllers_1.photoUploaderController);
