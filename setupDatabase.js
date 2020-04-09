const dotenv = require("dotenv");
const findFileUp = require("find-file-up");
const envFilePath = findFileUp.sync(".env");
dotenv.config({ path: envFilePath });
const { Client } = require("pg");
const uuid = require("uuid");

module.exports = async () => {
  const dbName = uuid.v4();
  process.env.TYPEORM_DATABASE = dbName;
  console.log(`Setup up Database - ${dbName}`);
  const client = new Client({
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    database: "postgres",
    user: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    ssl: process.env.TYPEORM_SSL === "true",
  });
  await client.connect();
  await client.query(`CREATE DATABASE "${dbName}";`);
  await client.end();
};
