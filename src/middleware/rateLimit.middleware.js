const rateLimit = require("express-rate-limit");

const auditLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes

  max: 20,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    error: {
      code: "RATE_LIMIT_EXCEEDED",
      message: "Too many requests. Please try again after 15 minutes.",
    },
  },
});

module.exports = auditLimiter;
