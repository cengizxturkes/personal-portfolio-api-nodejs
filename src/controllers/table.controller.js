const Response = require("../utils/response");
const addTable = require("../models/table.model");
const getTable = require("../models/table.model");
const qr = require("qrcode"); // qrcode kütüphanesini ekleyin
const mongoose = require("mongoose");

const addTableController = async (req, res) => {
  try {
    const { name, number, status, capacity } = req.body;

    const qrData = { name, number, status, capacity };
    const qrBase64 = await generateQR(qrData);

    const table = new addTable({
      name,
      number,
      status,
      capacity,
      qrBase64,
    });

    await table.save();

    return new Response(table, "Masa Başarıyla Eklendi").created(res);
  } catch (error) {
    console.error(error);
    return new Response(null, "Masa eklenirken bir hata oluştu").internalError(
      res
    );
  }
};

const getTablesController = async (req, res) => {
  try {
    const tables = await getTable.find();
    return new Response(tables).success(res);
  } catch (error) {
    console.error(error);
    return new Response(
      null,
      "Masalar getirilirken bir hata oluştu"
    ).internalError(res);
  }
};

const generateQR = async (data) => {
  try {
    const qrDataURL = await qr.toDataURL(JSON.stringify(data));
    return qrDataURL;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { addTableController, getTablesController };
