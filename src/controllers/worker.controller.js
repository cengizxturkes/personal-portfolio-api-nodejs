const Response = require("../utils/response");
const addWorker = require("../models/worker.model");
const getWorker = require("../models/worker.model");
const addWorkerController = async (req, res) => {
  var worker = addWorker(req.body);
  worker = await worker.save();
  return new Response(worker, "Çalışan Başarıyla Eklendi").created(res);
};
const getWorkerController = async (req, res) => {
  const worker = await getWorker.find();
  return new Response(worker).success(res);
};

module.exports = { addWorkerController, getWorkerController };
