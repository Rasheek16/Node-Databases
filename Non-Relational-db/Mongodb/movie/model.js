import { connect } from "../mongodb-config.js";

export async function getAll() {
  const collection = await connect();

  try {
    // Use the find method with an empty query to get all documents
    const docs = await collection.find({}).toArray();
    return docs;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
}

export async function remove(id) {
  try {
    const collection = await connect();
    return collection.deleteOne({ id });
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function get(id) {
  try {
    const collection = await connect();
    const doc = await collection.findOne({ id });
    return doc;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function insertMovie(movie) {
  try {
    movie.id = Date.now();
    const collection = await connect();
    const data = collection.insertOne(movie);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateMovie(movie) {
  try {
    movie.id = parseInt(movie.id, 10);
    const collection = await connect();
    const newMovie = await collection.updateOne(
      { id: movie.id },
      { $set: movie }
    );
    return newMovie;
  } catch (error) {
    return null;
  }
}

export function save(movie) {
  if (!movie.id) {
    return insertMovie(movie);
  } else {
    updateMovie(movie);
  }
}
