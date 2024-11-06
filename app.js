const express = require("express");
const dotenv = require("dotenv");
const urlRoutes = require("./routes/urlRoutes");
const globalErrorHandler = require("./controllers/errController");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use("/api/v1/urls", urlRoutes);
app.use(globalErrorHandler);

module.exports = app;
