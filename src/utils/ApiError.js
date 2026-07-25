class ApiError extends Error {
  constructor(status, code, message) {
    super(message);

    this.status = status;
    this.code = code;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;
