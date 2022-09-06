require("dotenv").config();

const PORT = process.env.PORT || 80;
const MongoUri =
  process.env.NODE_ENV === "test"
    ? process.env.MONGO_URI_TEST
    : process.env.MONGO_URI;

// const SERVERURI = process.env.NODE_ENV === "developement" ? "localhost" : "";
module.exports = {
  MongoUri,
  PORT,
  SERVERURI,
};
