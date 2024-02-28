const mongoose = require("mongoose");
const qr = require("qrcode");

const tableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    number: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    capacity: {
      type: Number,
      required: true,
      trim: true,
    },
    qrBase64: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "tables", timestamps: true }
);

tableSchema.pre("save", async function (next) {
  const dataToEncode = `${this.name}-${this.number}-${this.status}-${this.capacity}`;
  try {
    this.qrBase64 = await generateQRCode(dataToEncode);
    next();
  } catch (error) {
    next(error);
  }
});

const generateQRCode = async (data) => {
  return new Promise((resolve, reject) => {
    qr.toDataURL(
      data,
      { type: "image/png", rendererOpts: { quality: 0.3 } },
      (err, url) => {
        if (err) reject(err);
        const base64Data = url.replace(/^data:image\/png;base64,/, "");
        resolve(base64Data);
      }
    );
  });
};

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
