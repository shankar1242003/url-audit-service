const { failure } = require("../utils/response");

const errorHandler = (err, req, res, next) => {
  const logger = require("../utils/logger");

  logger.error(`[${req.requestId}] ${err.code}: ${err.message}`);

  return failure(
    res,
    err.code || "INTERNAL_SERVER_ERROR",
    err.message || "Something went wrong.",
    err.status || 500,
  );
};

module.exports = errorHandler;
