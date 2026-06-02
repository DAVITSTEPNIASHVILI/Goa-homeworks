import express from "express";
import { logIn, logOut, signUp, verify } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

export const usersRouter = express.Router()

// sign up
usersRouter.post("/signUp", signUp)
// verify
usersRouter.get("/verify/:code", verify)
// log in
usersRouter.post("/logIn", logIn)
// log out
usersRouter.get("/logOut", logOut)
// auto login
usersRouter.post("/autoLogin", protect, async (req, res, next) => {
    res.status(200).json(req.user);
})