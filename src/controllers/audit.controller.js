const cache = require("../cache/cache");
const ApiError = require("../utils/ApiError");
const auditService = require("../services/audit.service");
const { success } = require("../utils/response");

const auditUrl = async (req, res, next) => {
  try {
    const { url } = req.body;
    const cachedData = cache.get(url);

    if (cachedData) {
      return success(res, "Audit retrieved from cache.", {
        cached: true,
        audit: cachedData,
      });
    }

    const result = await auditService.audit(url);
    cache.set(url, result);

    return success(res, "URL audited successfully.", {
      cached: false,
      audit: result,
    });
  } catch (error) {
    return next(
      new ApiError(500, "AUDIT_FAILED", "Unable to audit the provided URL."),
    );
  }
};

module.exports = {
  auditUrl,
};
