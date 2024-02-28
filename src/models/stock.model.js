const mongoose = require("mongoose");
const stockShema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    total: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { collection: "stock", timestamps: true }
);
const stock = mongoose.model("stock", stockShema);
module.exports = stock;
