import express from "express";
import { userSignupController } from "../controllers/usersControllers.js";
import { signupSchema } from "../schemas/usersSchemas.js";
import validateBody from "../helpers/validateBody.js";

const usersRouter = express.Router();

usersRouter.post("/signup", validateBody(signupSchema), userSignupController);

usersRouter.post("/login");

usersRouter.post("/logout");

usersRouter.get("/current");

export default usersRouter;
