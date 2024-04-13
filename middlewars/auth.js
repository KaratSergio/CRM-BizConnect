import HttpError from "../helpers/HttpError.js";
import jwt from "jsonwebtoken";
import { userById } from "../services/usersServices.js";

const { SECRET_KEY } = process.env;

export const auth = async (req, res, next) => {
  const headerAuth = req.headers.authorization;

  try {
    if (!headerAuth) {
      throw HttpError(401, "Not authorization");
    }

    const [bearer, token] = headerAuth.split(" ");

    if (bearer !== "Bearer" || !token) {
      throw HttpError(401, "Not authorization");
    }
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await userById(id);

    if (!user || !user.token || token !== user.token) {
      throw HttpError(401, "Not authorization");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
