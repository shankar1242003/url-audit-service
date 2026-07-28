const { registerUser, loginUser } = require("../services/auth.service");
const { success, failure } = require("../utils/response");

// Register
const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const result = await registerUser(fullName, email, password);

    return success(res, "User registered successfully", result, 201);
  } catch (err) {
    return failure(res, 400, "REGISTER_FAILED", err.message);
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await loginUser(email, password);

    return success(res, "Login successful", result, 200);
  } catch (err) {
    return failure(res, 401, "LOGIN_FAILED", err.message);
  }
};

module.exports = {
  register,
  login,
};
