const limit = require("../utils/limiter");
const config = require("../config/env");
const axios = require("axios");
const cheerio = require("cheerio");

const audit = async (url) => {
  const start = Date.now();

  const response = await limit(() =>
    axios.get(url, {
      timeout: config.REQUEST_TIMEOUT,
      headers: {
        "User-Agent": "Production-URL-Audit-Service/1.0",
      },
    }),
  );

  const responseTime = Date.now() - start;

  const $ = cheerio.load(response.data);

  return {
    url,
    status: response.status,
    statusText: response.statusText,
    responseTime: `${responseTime} ms`,
    title: $("title").first().text().trim() || "No title",
    description:
      $('meta[name="description"]').attr("content") || "No description",
    https: url.startsWith("https"),
    links: $("a").length,
    images: $("img").length,
    contentType: response.headers["content-type"] || "Unknown",
    contentLength: response.headers["content-length"] || "Unknown",
    server: response.headers["server"] || "Unknown",
  };
};

module.exports = {
  audit,
};
