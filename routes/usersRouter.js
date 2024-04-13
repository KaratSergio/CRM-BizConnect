import express from "express";
import {
  userSignupController,
  userLoginController,
} from "../controllers/usersControllers.js";
import { signupSchema, loginSchema } from "../schemas/usersSchemas.js";
import validateBody from "../helpers/validateBody.js";

const usersRouter = express.Router();

usersRouter.post("/signup", validateBody(signupSchema), userSignupController);

usersRouter.post("/login", validateBody(loginSchema), userLoginController);

usersRouter.post("/logout");

usersRouter.get("/current");

export default usersRouter;
