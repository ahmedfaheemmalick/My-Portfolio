import express from "express";
import cors from "cors"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

const app = express();
dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD
    }
});

app.use(express.static("./client/build"), cors(), express.json());

app.post("/api/mail", async (req, res) => {
    const mailOptions = {
        to: process.env.MY_EMAIL,
        subject: `${req.body.name} sent a message from ${req.body.email}`,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(400).json(new Error(error));
        } else {
            res.status(201).json({ msg: "Message sent successfully." })
        }
    });
})

app.listen(4000)