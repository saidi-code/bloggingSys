const mongoose = require("mongoose");
const logger = require("./logger");
const { MongoUri } = require("./config");
require("dotenv").config;

const connectDb = () => {
  mongoose
    .connect(MongoUri)
    .then(() => {
      logger.info("Success Connect To Db");
    })
    .catch((error) => logger.error(error));
};
module.exports = connectDb;
