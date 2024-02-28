const mongoose = require("mongoose");
const accountPriceShema = new mongoose.Schema(
  {
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    level: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { collection: "account_prices", timestamps: true }
);

const accountPrice = mongoose.model("account_prices", accountPriceShema);

module.exports = accountPrice;
