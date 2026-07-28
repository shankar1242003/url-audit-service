const express = require("express");
const router = express.Router();

const { auditUrl } = require("../controllers/audit.controller");
const { validateAuditRequest } = require("../middleware/validation.middleware");
const auditLimiter = require("../middleware/rateLimit.middleware");
const authenticate = require("../middleware/auth.middleware");

router.post("/", authenticate, auditLimiter, validateAuditRequest, auditUrl);

module.exports = router;
