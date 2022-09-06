const { PORT, SERVERURI } = require("./config");
const logger = require("./logger");
const express = require("express");
const app = express();
const startServer = () => {
  const server = app.listen(PORT, SERVERURI, function (error) {
    if (error) {
      logger.error(error);
    }
    const host = server.address().address;
    const port = server.address().port;
    logger.info(`server is listening at http://${host}:${port}/`);
  });
};
module.exports = startServer;
