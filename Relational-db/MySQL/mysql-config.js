import mysql from "mysql2/promise";
export const connection = await mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "your-db",
});
