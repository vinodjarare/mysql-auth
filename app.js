const express = require("express");
const { errorMiddleware } = require("async-express-error-handler");
const app = express();

app.use(express.json());

app.use("/api", require("./routes/userRoute"));

app.use(errorMiddleware);
module.exports = app;
