const ErrorHandler = (error, req, res, next) => {
  console.log(res.body);
  const { id } = req.params;
  if (error.name === "CastError") {
    return res.status(400).json({ msg: `malformated id :${id}` });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  } else if ((error.code = "E11000")) {
    return res.status(400).json({ error: `username already exits!` });
  }
  next(error);
};
module.exports = ErrorHandler;
