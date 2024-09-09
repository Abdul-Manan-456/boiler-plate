import { Router } from "express";

import AuthController from "../controller/Auth.controller.js";
import { validator } from "../middleware/index.js";
import { loginUserValidator, registerUser } from "../validations/index.js";
export const router: Router = Router();
router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.post("/", validator(registerUser), AuthController.createUser);
router.post("/login", validator(loginUserValidator), AuthController.login);
