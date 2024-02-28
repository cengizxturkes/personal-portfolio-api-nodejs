const Response = require("../utils/response");
const addStock = require("../models/stock.model");
const getStock = require("../models/stock.model");
const addStockController = async (req, res) => {
  var stock = addStock(req.body);
  stock = await stock.save();
  return new Response(stock, "Stok Başarıyla Eklendi").created(res);
};
const getStockController = async (req, res) => {
  const stock = await getStock.find().populate("product");
  return new Response(stock).success(res);
};
module.exports = { addStockController, getStockController };
