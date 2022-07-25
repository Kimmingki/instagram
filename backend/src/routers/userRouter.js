import express from "express";
import { getProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", getProfile);

export default userRouter;
