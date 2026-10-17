require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const projectRoot = path.resolve(__dirname, "..");

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  throw new Error("Set JWT_SECRET to a random value with at least 32 characters");
}

if (process.env.FRONTEND_ORIGIN) {
  const allowedOrigins = process.env.FRONTEND_ORIGIN.split(",").map((origin) => origin.trim()).filter(Boolean);
  app.use(cors({ origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Origin is not allowed by CORS"));
  } }));
}

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false, limit: "10kb" }));
app.use("/api/auth", authRoutes);
app.use("/backend", (req, res) => res.status(404).json({ message: "Not found" }));
app.use(express.static(projectRoot));

app.get("/", (req, res) => res.sendFile(path.join(projectRoot, "index.html")));
app.get("/login", (req, res) => res.sendFile(path.join(projectRoot, "login.html")));
app.get("/signup", (req, res) => res.sendFile(path.join(projectRoot, "signup.html")));
app.use((req, res) => res.status(404).json({ message: "Not found" }));
app.use((error, req, res, next) => {
  console.error("Request error:", error.message);
  res.status(500).json({ message: "Internal server error" });
});

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}).catch((error) => {
  console.error("Server startup failed:", error.message);
  process.exit(1);
});
