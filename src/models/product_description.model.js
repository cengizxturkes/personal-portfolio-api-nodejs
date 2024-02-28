const mongoose = require("mongoose");
const productDescriptionShema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "product_descriptions", timestamps: true }
);
const productDescription = mongoose.model(
  "product_descriptions",
  productDescriptionShema
);
module.exports = productDescription;
