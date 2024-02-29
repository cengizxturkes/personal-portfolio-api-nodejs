const mongoose = require("mongoose");
const workerShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "workers", timestamps: true }
);

const worker = mongoose.model("workers", workerShema);
module.exports = worker;
