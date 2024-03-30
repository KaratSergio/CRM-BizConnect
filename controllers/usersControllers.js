import HttpError from "../helpers/HttpError.js";
import { isUserExist } from "../services/usersServices.js";

export const userSignupController = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await isUserExist(email);
    if (user) {
      throw HttpError(409, "Email in use");
    }
  } catch (error) {
    next(error);
  }
};
