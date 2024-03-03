const router = require("express").Router();
const {
  addProductController,
  getProductsController,
  addProductDescriptionController,
  getProductDescriptionsController,
} = require("../controllers/product.controller");
const authValidation = require("../middlewares/validations/auth.validation");
const { tokenCheck } = require("../middlewares/auth");
router.post("/addProduct", tokenCheck, addProductController);
router.get("/getProducts", tokenCheck, getProductsController);
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
module.exports = router;
