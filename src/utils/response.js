const success = (res, message, data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const failure = (
  res,
  statusCode = 500,
  code = "INTERNAL_SERVER_ERROR",
  message = "Something went wrong",
) => {
  return res.status(statusCode).json({
    success: false,
    error: {
      code,
      message,
    },
  });
};

module.exports = {
  success,
  failure,
};
