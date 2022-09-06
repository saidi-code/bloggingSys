require('dotenv').config();

const PORT = process.env.PORT || 80;
const MongoUri = process.env.MONGO_URI;

module.exports = {
  MongoUri,
  PORT,
};
