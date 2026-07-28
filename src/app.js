const express = require("express");
const authRoutes = require("./routes/auth.routes");
const requestId = require("./middleware/requestId.middleware");
const errorHandler = require("./middleware/error.middleware");

const auditRoutes = require("./routes/audit.routes");

const app = express();

// Parse JSON
app.use(express.json());

// Generate Request ID (must run before routes)
app.use(requestId);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Production URL Audit Service",
  });
});

// Health Check
app.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "UP",
  });
});

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/audit", auditRoutes);

// Error Handler (must always be last)
app.use(errorHandler);

module.exports = app;
