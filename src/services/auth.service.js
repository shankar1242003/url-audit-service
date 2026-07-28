const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sql } = require("../config/db");

const registerUser = async (fullName, email, password) => {
  // Check if user already exists
  const existingUser = await sql.query`
    SELECT * FROM Users WHERE Email = ${email}
  `;

  if (existingUser.recordset.length > 0) {
    throw new Error("Email already registered");
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // Insert user
  await sql.query`
    INSERT INTO Users (FullName, Email, PasswordHash)
    VALUES (${fullName}, ${email}, ${passwordHash})
  `;

  return {
    fullName,
    email,
  };
};

const loginUser = async (email, password) => {
  // Find user by email
  const result = await sql.query`
    SELECT * FROM Users WHERE Email = ${email}
  `;

  if (result.recordset.length === 0) {
    throw new Error("Invalid email or password");
  }

  const user = result.recordset[0];

  // Compare password
  const isMatch = await bcrypt.compare(password, user.PasswordHash);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT
  const token = jwt.sign(
    {
      userId: user.UserId,
      email: user.Email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  return {
    token,
    user: {
      userId: user.UserId,
      fullName: user.FullName,
      email: user.Email,
    },
  };
};

module.exports = {
  registerUser,
  loginUser,
};
