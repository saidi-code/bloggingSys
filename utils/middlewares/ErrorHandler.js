const ErrorHandler = (error, req, res, next) => {
  const { id } = req.params;
  if ((error.name = "CastError")) {
    return res.status(404).json({ msg: `malformated id :${id}` });
  }
  next(error);
};
module.exports = ErrorHandler;
