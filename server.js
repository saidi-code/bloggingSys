const express = require("express");
const cors = require("cors");
const logger = require("./utils/logger");
const routes = require("./routes/blog");
const { PORT } = require("./utils/config");
const connectDb = require("./utils/dB");
const notFound = require("./utils/middlewares/404");
const requestLogger = require("./utils/middlewares/requesLogger");
const ErrorHandler = require("./utils/middlewares/ErrorHandler");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// app Routes
app.use(requestLogger);
app.use("/api/v1/", routes);
app.use(notFound);
app.use(ErrorHandler);
const start = async () => {
  try {
    app.listen(PORT, () => {
      logger.info(`Server Start At Port ${PORT}`);
    });
    connectDb();
  } catch (error) {
    logger.error(error);
  }
};
start();
