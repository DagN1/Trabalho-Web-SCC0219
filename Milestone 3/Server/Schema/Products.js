const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  description: { type: String },
  quant: { type: Number, default: 1 },
  vend: { type: Number, default: 0 },
});

module.exports = mongoose.model("Products", productsSchema);
