const sql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),

  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

const connectDB = async () => {
  try {
    console.log({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD ? "*****" : "NOT SET",
      server: process.env.DB_SERVER,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    await sql.connect(config);
    console.log("✅ SQL Server Connected");
  } catch (err) {
    console.error("❌ Database Connection Failed");
    console.error(err);
  }
};
module.exports = {
  sql,
  connectDB,
};
