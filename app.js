import express from "express";
import morgan from "morgan";
import cors from "cors";

import usersRouter from "./routes/usersRouter.js";

import { connectDb } from "./db/connection.js";

import contactsRouter from "./routes/contactsRouter.js";

const { PORT } = process.env;

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);
app.use("/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`"Server is running. Use our API on port: ${PORT}"`);
  });
});
