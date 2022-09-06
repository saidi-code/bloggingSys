const ErrorHandler = (error, req, res, next) => {
  const { id } = req.params;
  if (error.name === 'CastError') {
    return res.status(400).json({ msg: `malformated id :${id}` });
  } if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }
  next(error);
};
module.exports = ErrorHandler;
