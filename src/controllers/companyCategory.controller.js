const Response = require("../utils/response");
const addCompanyCategories = require("../models/companyCategory.model");
const getCompanyCategories = require("../models/companyCategory.model");
const addCompanySubCategories = require("../models/companySubCategory.model");
const getCompanySubCategories = require("../models/companySubCategory.model");
const addCompanyCategoriesController = async (req, res) => {
  var companyCategory = addCompanyCategories(req.body);
  companyCategory = await companyCategory.save();
  return new Response(companyCategory, "Kategori Başarıyla Eklendi").created(
    res
  );
};
const getCompanyCategoriesController = async (req, res) => {
  const companyCategories = await getCompanyCategories.find();
  return new Response(companyCategories).success(res);
};
const addCompanySubCategoriesController = async (req, res) => {
  var companySubCategory = addCompanySubCategories(req.body);
  companySubCategory = await companySubCategory.save();
  return new Response(companySubCategory, "Kategori Başarıyla Eklendi").created(
    res
  );
};
const getCompanySubCategoriesController = async (req, res) => {
  const companyCategories = await getCompanySubCategories.find();
  return new Response(companyCategories).success(res);
};
module.exports = {
  addCompanyCategoriesController,
  getCompanyCategoriesController,
  addCompanySubCategoriesController,
  getCompanySubCategoriesController,
};
