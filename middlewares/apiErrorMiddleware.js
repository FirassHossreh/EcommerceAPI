const apiErrorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.statusText = err.statusText || "error";
  if (process.env.ENVIRUMENT == "development") {
    apiErrorDevelopment(err, res);
  } else {
    apiErrorProduction(err, res);
  }
};

const apiErrorDevelopment = (err, res) => {
  res.status(err.statusCode).json({
    statusText: err.statusText,
    error: err,
    message: err.message,
  });
};
const apiErrorProduction = (err, res) => {
  res.status(err.statusCode).json({
    statusText: err.statusText,
    message: err.message,
  });
};
module.exports = apiErrorMiddleware;
