import express from "express";
import { postLogin, postSignUp } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.post("/signup", postSignUp);
globalRouter.post("/login", postLogin);

export default globalRouter;
