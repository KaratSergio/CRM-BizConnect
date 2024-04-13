import User from "../db/models/User.js";

import jwt from "jsonwebtoken";

import "dotenv/config";

export const isUserExist = (email) => User.findOne({ email });

export const updateUserWithToken = async (id) => {
  const { SECRET_KEY } = process.env;

  const token = jwt.sign({ id }, SECRET_KEY);

  const updateUser = await User.findByIdAndUpdate(id, { token }, { new: true });
  return updateUser;
};

export const createUser = async (userData) => {
  const user = new User(userData);

  await user.hashPassword();

  await user.save();

  const newUser = await updateUserWithToken(user._id);

  return newUser;
};
