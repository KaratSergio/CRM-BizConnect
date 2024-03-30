import { connect } from "mongoose";
import "dotenv/config";

const { MONGO_DB } = process.env;

export const connectDb = async () => {
  try {
    await connect(MONGO_DB);
    console.log("DB connecting");
  } catch (error) {
    console.log(error);
  }
};
