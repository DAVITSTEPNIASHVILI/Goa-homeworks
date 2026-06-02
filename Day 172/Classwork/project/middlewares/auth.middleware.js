import Users from "../models/users.model.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";
import jwt from "jsonwebtoken";

export const protect = catchAsync(async (req, res, next) => {
    const token = req.cookies.lg

    if (!token) {
        return next(new AppError("You aren't logged in!", 401))
    }

    const {id} = jwt.verify(token, process.env.JWT_SECRET)
    const user = await Users.findById(id)

    if (!user) {
        return next(new AppError("You aren't logged in!", 401))
    }

    req.user = user
    next()
})