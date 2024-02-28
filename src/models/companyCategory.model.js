const mongoose = require("mongoose");
const companyCategoryShema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category_id: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { collection: "company_categories", timestamps: true }
);
const companyCategory = mongoose.model(
  "company_categories",
  companyCategoryShema
);
module.exports = companyCategory;
