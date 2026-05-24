import nodemailer from "nodemailer"
import dotenv from "dotenv"
import catchAsync from "./catchAsync.js"

dotenv.config()

const transporter = nodemailer.createTransport({
    host: sandbox.smtp.mailtrap.io,
    port: 2525,
    auth: {
        user: process.env.EMAIL_USERNAME,
        password: process.env.EMAIL_PASSWORD
    }
})

export const sendEmail = catchAsync(async options => {
    await transporter.sendMail({
        from: '"Group 54 Bookshop" <no-reply>',
        to: options.to,
        subject: options.subject,
        html: options.html
    })
})