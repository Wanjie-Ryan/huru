const express = require("express");
const app = express()
const port = process.env.PORT || 3005;
const cors = require("cors");
const cookie = require("cookie-parser");
require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const connectionDB = require("./connection/connection");

app.use(cookie());
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://raghav-alpha.vercel.app",
    ],
    credentials: true,
    exposedHeaders: ["ip"],
  })
);

app.get("/wake-up", (req, res) => {
  res.json({
    responseType: "success",
    message: "Server is awake and running",
  });
});

const DBConnection = async () => {
  try {
    await connectionDB(process.env.mongo_url);

    app.listen(port, () => {
      console.log("jis")
      console.log(`server is running on port, ${port}`);
    });
  } catch (err) {
    console.log("running as expected")
    console.log(err);
    process.exit(1);
  }
};

DBConnection();
