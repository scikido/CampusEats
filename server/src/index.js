import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";
import { collegesRouter } from "./routes/colleges.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/colleges", collegesRouter);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
