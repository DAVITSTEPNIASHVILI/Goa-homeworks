import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcrypt";

const usersSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: [true, "Fullname is required"],
            lowercase: true
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            validate: [validator.isEmail, "Please provide a valid email!"]
        },
        password: {
            type: String,
            required: [true, "Password is required!"],
            minLength: 6,
            maxLength: 12,
            select: false
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        isVerified: {
            type: String,
            default: false
        },
        verificationCode: String
    }, {
        timestamps: true
    }
)

usersSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10)
})

const Users = mongoose.model("users", usersSchema)
export default Users