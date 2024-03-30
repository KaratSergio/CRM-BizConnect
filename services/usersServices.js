import User from "../db/models/User.js";

export const isUserExist = (email) => User.findOne({ email });

export const createUser = (userData) => {
  const user = new User(userData);
};
