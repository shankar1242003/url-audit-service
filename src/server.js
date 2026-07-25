require("dotenv").config();

const app = require("./app");
const config = require("./config/env");
const logger = require("./utils/logger");

app.listen(config.PORT, () => {
  logger.info(`Server running on http://localhost:${config.PORT}`);
});
