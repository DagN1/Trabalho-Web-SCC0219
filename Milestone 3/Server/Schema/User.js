const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   name: { type: String, required: true },
//   address: {
//     street: { type: String },
//     city: { type: String },
//     required: true,
//   },
//   phone: { type: String, required: true },
//   admin: { type: Boolean, default: false },
// });

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
// module.exports = mongoose.model("User", userSchema);
