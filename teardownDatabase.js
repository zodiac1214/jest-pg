const dotenv = require("dotenv");
dotenv.config();
const { Client } = require("pg");

module.exports = async () => {
  const dbName = process.env.TYPEORM_DATABASE
  process.env.TYPEORM_DATABASE = dbName;
  console.log(`Tear Down Database - ${dbName}`);
  const client = new Client({
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    database: "postgres",
    user: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    ssl: process.env.TYPEORM_SSL === "true",
  });
  await client.connect();
  await client.query(
    `SELECT pg_terminate_backend(pid) FROM pg_stat_activity 
        WHERE datname='${dbName}';`,
  );
  await client.query(`DROP DATABASE "${dbName}";`);
  await client.end();
};
