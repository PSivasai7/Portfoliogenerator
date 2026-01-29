const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./database");
const routes = require("./Route");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/imgs", express.static(path.join(__dirname, "imgs")));

// Routes
app.use("/api", routes);

// Serve HTML files
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"));
});

// API health check
app.get("/api/health", (req, res) => {
    res.json({ status: "API is running..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Portfolio form available at http://localhost:${PORT}/form`);
});





