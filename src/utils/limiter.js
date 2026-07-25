const pLimit = require("p-limit");
const config = require("../config/env");

const limit = pLimit(Number(config.MAX_CONCURRENT_REQUESTS));

module.exports = limit;
