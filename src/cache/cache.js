const NodeCache = require("node-cache");
const config = require("../config/env");

const cache = new NodeCache({
  stdTTL: config.CACHE_TTL,
  checkperiod: 120,
});

module.exports = cache;
