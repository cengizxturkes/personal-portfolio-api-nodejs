const mongoose = require("mongoose");
const companySubCategoryShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    business_id: {
      type: Number,
      required: true,
      trim: true,
    },
    category_id: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { collection: "company_sub_categories", timestamps: true }
);
const companySubCategory = mongoose.model(
  "company_sub_categories",
  companySubCategoryShema
);
module.exports = companySubCategory;
