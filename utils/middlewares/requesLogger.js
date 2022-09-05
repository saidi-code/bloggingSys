const requestLogger = (req, res, next) => {
  console.log("request header: ", req.header);
  console.log("request method: ", req.method);
  console.log("request path: ", req.path);
  console.log("request body: ", req.body);
  console.log("----");
  next();
};
module.exports = requestLogger;
