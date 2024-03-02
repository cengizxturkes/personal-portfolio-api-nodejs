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
  addProductDescriptionController,
  getProductDescriptionsController,
} = require("../controllers/product.controller");
const {
  addAccountPriceController,
  getAccountPriceController,
} = require("../controllers/account_price.controller");
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
const {
  addStockController,
  getStockController,
} = require("../controllers/stock.controller");
const {
  addTableController,
  getTablesController,
} = require("../controllers/table.controller");
const authValidation = require("../middlewares/validations/auth.validation");
const { tokenCheck } = require("../middlewares/auth");
const { route } = require("express/lib/router");
const {
  addWorkerController,
  getWorkerController,
} = require("../controllers/worker.controller");

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
router.post("/company/addStock", tokenCheck, addStockController);
router.get("/company/getStock", tokenCheck, getStockController);
router.post("/company/addTable", tokenCheck, addTableController);
router.get("/company/getTables", tokenCheck, getTablesController);
router.post(
  "/addProductDescription",
  tokenCheck,
  addProductDescriptionController
);
router.get(
  "/getProductDescriptions",
  tokenCheck,
  getProductDescriptionsController
);
//TODO : Add the route for adding a product description
router.post("/addAccountPrice", tokenCheck, addAccountPriceController);
router.get("/getAccountPrice", tokenCheck, getAccountPriceController);
router.post("/addworker", tokenCheck, addWorkerController);
router.get("/getworker", tokenCheck, getWorkerController);
module.exports = router;
