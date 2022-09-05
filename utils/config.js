require("dotenv").config();
const Port = process.env.port;
const MongoUri = process.env.MONGO_URI;

module.exports = {
  MongoUri,
  Port,
};
