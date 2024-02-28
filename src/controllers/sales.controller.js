const bcrypt = require("bcrypt");
const APIError = require("../utils/errors");
const Response = require("../utils/response");
const addSales = require("../models/sales.model");
const getSales = require("../models/sales.model");
const addSalesController = async (req, res) => {
  var sales = addSales(req.body);
  sales = await sales.save();
  return new Response(sales, "Satış Başarıyla Eklendi").created(res);
};
const getSalesController = async (req, res) => {
  try {
    const sales = await getSales.find().populate("product");
    return new Response(sales).success(res);
  } catch (error) {
    console.error(error);
    return new Response(error.message).error(res);
  }
};
module.exports = { addSalesController, getSalesController };
