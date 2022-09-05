const notFound = (req, res) => {
  res.status(404).json({ msg: "The Route Not Found!" });
};
module.exports = notFound;
