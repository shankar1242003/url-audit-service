const success = (req, res, data, message = "Success", status = 200) => {
  return res.status(status).json({
    success: true,
    requestId: req.requestId,
    message,
    data,
  });
};

const failure = (req, res, code, message, status = 500) => {
  return res.status(status).json({
    success: false,
    requestId: req.requestId,
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
