const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");
const addProductModel = require("../models/product.model");
const getProductModel = require("../models/product.model");
const addProductDescriptionModel = require("../models/product_description.model");
const getProductDescriptionModel = require("../models/product_description.model");
const addProductController = async (req, res) => {
  var product = addProductModel(req.body);
  product = await product.save();
  return new Response(product, "Ürün Başarıyla Eklendi").created(res);
};
const getProductsController = async (req, res) => {
  const products = await getProductModel.find();
  return new Response(products).success(res);
};
const addProductDescriptionController = async (req, res) => {
  var productDescription = addProductDescriptionModel(req.body);
  productDescription = await productDescription.save();
  return new Response(
    productDescription,
    "Ürün Açıklaması Başarıyla Eklendi"
  ).created(res);
};
const getProductDescriptionsController = async (req, res) => {
  const productDescriptions = await getProductDescriptionModel.find();
  return new Response(productDescriptions).success(res);
};
module.exports = {
  addProductController,
  getProductsController,
  addProductDescriptionController,
  getProductDescriptionsController,
};
