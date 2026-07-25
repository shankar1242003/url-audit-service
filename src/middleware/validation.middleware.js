const Joi = require("joi");

const auditSchema = Joi.object({
  url: Joi.string().uri().required().messages({
    "string.empty": "URL is required.",
    "string.uri": "Please provide a valid URL.",
    "any.required": "URL is required.",
  }),
});

const validateAuditRequest = (req, res, next) => {
  const body = req.body || {};

  const { error } = auditSchema.validate(body);

  if (error) {
    return res.status(400).json({
      success: false,
      error: {
        code: "INVALID_URL",
        message: error.details[0].message,
      },
    });
  }

  next();
};

module.exports = {
  validateAuditRequest,
};
