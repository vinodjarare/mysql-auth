const express = require("express");
const {
  register,
  login,
  forgetPassword,
  resetPassword,
} = require("../controller/userController");
const { isAuthenticated, isAuthorized } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgetPassword").put(forgetPassword);
router.route("/resetPassword").post(resetPassword);
module.exports = router;
