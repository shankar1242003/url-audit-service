const express = require("express");
const router = express.Router();

const { auditUrl } = require("../controllers/audit.controller");
const { validateAuditRequest } = require("../middleware/validation.middleware");
const auditLimiter = require("../middleware/rateLimit.middleware");

router.post("/", auditLimiter, validateAuditRequest, auditUrl);

module.exports = router;
