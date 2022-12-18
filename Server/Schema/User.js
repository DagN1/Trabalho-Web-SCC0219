const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    adress: String,
    phone: String,
  },
  {
    collection: "userInfo",
  }
);

module.exports = mongoose.model("userInfo", userDetailSchema);
