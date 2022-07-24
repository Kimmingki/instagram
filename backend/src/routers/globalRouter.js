import express from "express";
import {
  getLogin,
  getSignUp,
  postLogin,
  postSignUp,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.route("/singup").get(getSignUp).post(postSignUp);
globalRouter.route("/login").get(getLogin).post(postLogin);

export default globalRouter;
