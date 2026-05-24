import express from "express";
import { signUp } from "../controllers/auth.controller.js";

export const usersRouter = express.Router()

usersRouter.post("/signUp", signUp)