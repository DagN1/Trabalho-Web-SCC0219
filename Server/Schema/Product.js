const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    description: { type: String },
    stock: { type: Number, default: 1, required: true },
    sold: { type: Number, default: 0 },
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    collection: "productInfo",
  }
);

module.exports = mongoose.model("productInfo", productSchema);
