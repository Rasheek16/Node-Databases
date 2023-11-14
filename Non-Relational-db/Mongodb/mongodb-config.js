import { MongoClient } from "mongodb";

let collection = null;

export async function connect() {
  try {
    if (collection) {
      return collection;
    }

    const client = new MongoClient("mongodb://127.0.0.1:27017/");

    await client.connect();

    const db = client.db("movie-db");
    collection = db.collection("Movie");

    return collection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error to let the calling code handle it
  }
}
