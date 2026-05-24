import catchAsync from "../utils/catchAsync.js"
import Users from "../models/users.model.js"


export const signUp = catchAsync(async (req, res, next) => {
    const {fullname, email, password} = req.body
    const newUser = await Users.create({fullname, email, password})

    res.status(200).json(newUser)
})