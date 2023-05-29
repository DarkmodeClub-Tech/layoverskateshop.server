"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const login_controllers_1 = require("../controllers/login.controllers");
exports.loginRouter = (0, express_1.Router)();
exports.loginRouter.post("/auth", login_controllers_1.loginController);
