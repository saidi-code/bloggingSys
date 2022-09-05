require("dotenv").config();
const Port = process.env.port || 3002;
const MongoUri = process.env.MONGO_URI;

module.exports = {
  MongoUri,
  Port,
};
