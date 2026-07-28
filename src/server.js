require("dotenv").config();

const app = require("./app");
const config = require("./config/env");
const logger = require("./utils/logger");
const { connectDB } = require("./config/db");
connectDB();

app.listen(config.PORT, () => {
  logger.info(`Server running on http://localhost:${config.PORT}`);
});
