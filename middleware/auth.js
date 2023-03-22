const { asyncError, ErrorHandler } = require("async-express-error-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isAuthenticated = asyncError(async (req, res, next) => {
  const { token } = req.headers;

  if (!token) return next(new ErrorHandler("You are not logged in", 401));

  const authToken = token.split(" ")[1];

  const userToken = jwt.verify(authToken, process.env.JWT_SEC);

  req.user = await User.findOne({ where: { id: userToken.id } });

  console.log(userToken);
  next();
});

exports.isAuthorized = asyncError(async (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(new ErrorHandler("Only Admin Allowed", 405));
  }
  console.log(req.user);
  next();
});
