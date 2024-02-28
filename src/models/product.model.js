const mongoose = require("mongoose");
const productShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    salesprice: {
      type: Number, // Change here
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    purchasePrice: {
      type: Number, // Change here
      required: true,
      trim: true,
    },
  },
  { collection: "products", timestamps: true }
);
const product = mongoose.model("products", productShema);
module.exports = product;
