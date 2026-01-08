const express = require("express");
const cors = require("cors");

const app = express();

const route = require("./api/index");

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use("/api", route);

module.exports = app;
