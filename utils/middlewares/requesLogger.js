const requestLogger = (req, res, next) => {
  console.log('request path: ', req.path);
  console.log('request method: ', req.method);
  console.log('request body: ', req.body);
  console.log('----');
  next();
};
module.exports = requestLogger;
