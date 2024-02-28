const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");
const addProductModel = require("../models/product.model");
const getProductModel = require("../models/product.model");
const addProductController = async (req, res) => {
  var product = addProductModel(req.body);
  product = await product.save();
  return new Response(product, "Ürün Başarıyla Eklendi").created(res);
};
const getProductsController = async (req, res) => {
  const products = await getProductModel.find();
  return new Response(products).success(res);
};
module.exports = { addProductController, getProductsController };
