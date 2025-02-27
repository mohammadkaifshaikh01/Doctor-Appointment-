import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";
import nodemailer from "nodemailer";
import User from "./src/models/user.model.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Failed to connect MongoDB", error);
  }
};

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});






// User Registration with Email
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User Already Exists, Please Login" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ username, email, password: hashedPassword });

    // Send Welcome Email
    // await sendMail(email, username);

    res.status(201).json({ message: "User Registered", user });
  } catch (error) {
    res.status(500).json({ message: "Registration Failed", error: error.message });
  }
});

// User Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ message: "User Login Successful", token: token, user: { username: user.username, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Login Failed", error: error.message });
  }
});
