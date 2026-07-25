require("dotenv").config();

module.exports = {
  PORT: Number(process.env.PORT) || 5000,
  REQUEST_TIMEOUT: Number(process.env.REQUEST_TIMEOUT) || 5000,
  CACHE_TTL: Number(process.env.CACHE_TTL) || 600,
  MAX_CONCURRENT_REQUESTS: Number(process.env.MAX_CONCURRENT_REQUESTS) || 5,
};
