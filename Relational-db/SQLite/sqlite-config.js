import sqlite from "sqlite3";

const db = new sqlite.Database("./movie.db");

export default db;
