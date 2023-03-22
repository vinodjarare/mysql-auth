const express = require("express");
const {
  register,
  login,
  forgetPassword,
  resetPassword,
  updateUser,
  deleteUser,
  updatePassword,
  getAllUsers,
  getProfile,
} = require("../controller/userController");
const { isAuthenticated, isAuthorized } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgetPassword").put(forgetPassword);
router.route("/resetPassword").post(resetPassword);
router
  .route("/user")
  .put(isAuthenticated, updateUser)
  .delete(isAuthenticated, deleteUser);
router.route("/userPassword").put(isAuthenticated, updatePassword);
router.route("/users").get(isAuthenticated, isAuthorized, getAllUsers);
router.route("/me").get(isAuthenticated, getProfile);
module.exports = router;
