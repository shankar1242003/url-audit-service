const success = (res, data, message = "Success", status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};

const failure = (res, code, message, status = 500) => {
  return res.status(status).json({
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
