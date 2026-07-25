const { failure } = require("../utils/response");

const errorHandler = (err, req, res, next) => {
  const logger = require("../utils/logger");

  logger.error(`[${req.requestId}] ${err.code}: ${err.message}`);
  return failure(
    res,
    err.status || 500,
    err.code || "INTERNAL_SERVER_ERROR",
    err.message || "Something went wrong.",
  );
};

module.exports = errorHandler;
