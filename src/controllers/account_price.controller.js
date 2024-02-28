const Response = require("../utils/response");
const addAccountPrice = require("../models/account_price.model");
const getAccountPrice = require("../models/account_price.model");
const addAccountPriceController = async (req, res) => {
  var accountPrice = addAccountPrice(req.body);
  accountPrice = await accountPrice.save();
  return new Response(accountPrice, "Hesap Fiyatı Başarıyla Eklendi").created(
    res
  );
};
const getAccountPriceController = async (req, res) => {
  const accountPrice = await getAccountPrice.find();
  return new Response(accountPrice).success(res);
};
module.exports = { addAccountPriceController, getAccountPriceController };
