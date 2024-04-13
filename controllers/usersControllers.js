import HttpError from "../helpers/HttpError.js";
import {
  isUserExist,
  createUser,
  updateUserWithToken,
  logOutUser
} from "../services/usersServices.js";

export const userSignupController = async (req, res, next) => {
  const { email, name } = req.body;
  try {
    const user = await isUserExist(email);
    if (user) {
      throw HttpError(409, "Email in use");
    }
    const newUser = await createUser(req.body);
    res.status(201).json({
      user: {
        email,
        name,
      },
      token: newUser.token,
    });
  } catch (error) {
    next(error);
  }
};

export const userLoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await isUserExist(email);
    if (!user) {
      throw HttpError(401, "Email or password is wrong");
    }
    const isPasswordCoward = await user.comparePassword(password);
    if (!isPasswordCoward) {
      throw HttpError(401, "Email or password is wrong");
    }
    const updatedUser = await updateUserWithToken(user._id);
    res.json({
      user: {
        name: updatedUser.name,
        email,
      },
      token: updatedUser.token,
    });
  } catch (error) {
    next(error);
  }
};

export const logoutUser = async (req, res, next) => {
  const {_id} = req.user

  try {
    await logOutUser(_id)

    res.sendStatus(204)

  } catch (error) {
    next(error)
  }
}

export const currentUser = (req, res) => {
  const {name, email} = req.user

  res.send({ name, email})

}