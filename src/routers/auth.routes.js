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
module.exports = router;
