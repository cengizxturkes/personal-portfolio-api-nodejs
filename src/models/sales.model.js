const mongoose = require("mongoose");
const salesShema = new mongoose.Schema(
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
  { collection: "sales", timestamps: true }
);
const sales = mongoose.model("sales", salesShema);
module.exports = sales;
