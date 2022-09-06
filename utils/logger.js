const info = (msg) => {
  if (process.env.NODE_ENV !== "test") {
    console.log(msg);
  }
};
const error = (err) => {
  if (!(process.env.NODE_ENV !== "test")) {
    console.log(err);
  }
};
module.exports = {
  info,
  error,
};
