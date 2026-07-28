const jwt = require("jsonwebtoken");
const { failure } = require("../utils/response");

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    console.log("Authorization Header:", authHeader);

    if (!authHeader) {
      return failure(
        res,
        401,
        "UNAUTHORIZED",
        "Access denied. Token required.",
      );
    }

    if (!authHeader.startsWith("Bearer ")) {
      return failure(res, 401, "INVALID_TOKEN", "Invalid token format.");
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    // ✅ Now it's safe to use token
    console.log("Token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    console.error(err);

    return failure(res, 401, "INVALID_TOKEN", err.message);
  }
};

module.exports = authenticate;
