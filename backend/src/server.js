import "./db";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import globalRouter from "./routers/globalRouter";
import morgan from "morgan";
import userRouter from "./routers/userRouter";

const app = express();
dotenv.config();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routing
app.use("/api", globalRouter);
app.use("/api/users", userRouter);

// server start
app.listen(process.env.PORT, () => {
  console.log(`✅ Listening on http://localhost:${process.env.PORT}/`);
});
