import express from "express";
import { signUp, verify } from "../controllers/auth.controller.js";

export const usersRouter = express.Router()

// sign up
usersRouter.post("/signUp", signUp)
// verify
usersRouter.get("/verify/:code", verify)