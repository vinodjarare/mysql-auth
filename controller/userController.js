const { asyncError, ErrorHandler } = require("async-express-error-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");
exports.register = asyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("All fields are mandatory", 400));
  }
  const user = await User.findOne({ where: { email } });
  if (user) {
    return next(new ErrorHandler("User already exist!", 409));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ name, email, password: hashedPassword });

  res.status(201).json({ sucess: true, message: "User created successfully " });
});

exports.login = asyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Invalid credential", 400));
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return next(new ErrorHandler("Invalid credential", 400));
  }

  const comparedPassword = await bcrypt.compare(password, user.password);
  if (!comparedPassword) {
    return next(new ErrorHandler("Invalid credential", 400));
  }

  const token = jwt.sign(
    { id: user.id, isAdmin: user.role },
    process.env.JWT_SEC,
    { expiresIn: process.env.JWT_EXP }
  );
  res.status(200).json({ success: true, message: "Login successful", token });
});

exports.forgetPassword = asyncError(async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return next(new ErrorHandler("User not found!", 404));
  }
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return next(new ErrorHandler("User not found!", 404));
  }

  //Generate OTP

  const otp = Math.floor(Math.random() * 1000000 + 1);

  // const resetPasswordTokenExpiration = Date.now() * 1000 * 60 * 30;

  // const resetToken = await User.update(
  //   {
  //     resetPasswordToken: otp,
  //     resetPasswordTokenExpiration,
  //   },
  //   { where: { email } }
  // );
});
