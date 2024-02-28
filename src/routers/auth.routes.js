const router = require("express").Router();
const {
  login,
  register,
  me,
  forgetPassword,
  resetCodeCheck,
  resetPassword,
} = require("../controllers/auth.controller");

const {
  addProductController,
  getProductsController,
} = require("../controllers/product.controller");
const {
  addSalesController,
  getSalesController,
} = require("../controllers/sales.controller");

const {
  addCompanyCategoriesController,
  getCompanyCategoriesController,
  addCompanySubCategoriesController,
  getCompanySubCategoriesController,
} = require("../controllers/companyCategory.controller");
const authValidation = require("../middlewares/validations/auth.validation");
const { tokenCheck } = require("../middlewares/auth");

router.post("/login", authValidation.login, login);

router.post("/register", authValidation.register, register);

router.get("/me", tokenCheck, me);

router.post("/forget-password", forgetPassword);

router.post("/reset-code-check", resetCodeCheck);

router.post("/reset-password", resetPassword);
router.post("/addProduct", tokenCheck, addProductController);
router.get("/getProducts", tokenCheck, getProductsController);
router.post("/addSales", tokenCheck, addSalesController);
router.get("/getSales", tokenCheck, getSalesController);
router.post("/company/addCategory", tokenCheck, addCompanyCategoriesController);

router.get(
  "/company/getCategories",
  tokenCheck,
  getCompanyCategoriesController
);
router.get(
  "/company/getSubCategories",
  tokenCheck,
  getCompanySubCategoriesController
);
router.post(
  "/company/addSubCategory",
  tokenCheck,
  addCompanySubCategoriesController
);

module.exports = router;
