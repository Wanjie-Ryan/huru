const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = (url) => {
  console.log(url)
  // logging to see the url
  return mongoose.connect(url);
};

module.exports = connectDB;
