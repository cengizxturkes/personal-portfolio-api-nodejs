const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");
const addProductModel = require("../models/product.model");
const addProductController = async (req, res) => {
  var product = addProductModel(req.body);
  product = await product.save();
  return new Response(product, "Ürün Başarıyla Eklendi").created(res);
};
const getProductsController = async (req, res) => {
  try {
    const products = await Product.find();
    return new Response(products).success(res);
  } catch (error) {
    // Handle error, send appropriate response
    console.error(error);
    return new APIError("Error fetching products", 500).send(res);
  }
};
module.exports = { addProductController, getProductsController };
