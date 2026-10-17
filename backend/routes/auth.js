const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function createToken(user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

function publicUser(user) {
  return { id: user._id, name: user.name, email: user.email };
}

router.post("/signup", async (req, res) => {
  try {
    const name = typeof req.body.name === "string" ? req.body.name.trim() : "";
    const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body.password === "string" ? req.body.password : "";
    if (!name || !email || !password) return res.status(400).json({ message: "All fields are required" });
    if (name.length > 100 || email.length > 254 || !emailPattern.test(email)) {
      return res.status(400).json({ message: "Enter a valid name and email address" });
    }
    if (password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters long" });
    if (await User.exists({ email })) return res.status(409).json({ message: "An account with this email already exists" });

    const user = await User.create({ name, email, password: await bcrypt.hash(password, 12) });
    return res.status(201).json({ message: "Signup successful", token: createToken(user), user: publicUser(user) });
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ message: "An account with this email already exists" });
    console.error("Signup error:", error.message);
    return res.status(500).json({ message: "Unable to create your account right now" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body.password === "string" ? req.body.password : "";
    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    return res.json({ message: "Login successful", token: createToken(user), user: publicUser(user) });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Unable to log you in right now" });
  }
});

module.exports = router;
