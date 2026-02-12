const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = (url) => {
  console.log(url)
  console.log("mongodb db logging...")
  // logging to see the urls 
  return mongoose.connect(url);
};

module.exports = connectDB;
