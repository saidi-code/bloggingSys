require("dotenv").config();
const Port = process.env.port || 80;
const MongoUri = process.env.MONGO_URI;

module.exports = {
  MongoUri,
  Port,
};
