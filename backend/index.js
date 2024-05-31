require("dotenv").config();
var cors = require("cors");
const express = require("express");
const app = express();

//middleware
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

//db
const connectDB = require("./db/connect");

//routes
const bondsRouter = require("./routes/bonds");
const userRouter = require("./routes/user");
const transactionRouter = require("./routes/transactions");

app.use(express.json());
app.use(cors());
app.get("/api", (req, res) => {
  res.send("<h1>Hello World</h1>");
});
app.use("/api/bonds", bondsRouter);
app.use("/api/users", userRouter);
app.use("/api/transactions", transactionRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, console.log(`Server started at port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();

module.exports = app;