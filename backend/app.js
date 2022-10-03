const express = require("express");
const Customer = require("./routes/customerRoute");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

app.use("/api/v1", Customer);

module.exports = app;
