const sql = require("mssql");

const config = {
  user: "sa",
  password: "Pass@123",
  server: "LAPTOP-OD2RF6KA",
  database: "URLAuditDB",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

(async () => {
  try {
    await sql.connect(config);
    console.log("✅ Connected successfully");
    await sql.close();
  } catch (err) {
    console.error(err);
  }
})();
