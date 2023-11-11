import { connection } from "../mysql-config.js";

export async function getAll() {
  try {
    const query = "SELECT * FROM movies";
    const [data] = await connection.query(query);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function remove(id) {
  const query = "DELETE FROM movies WHERE id=?";
  await connection.query(query, [id]);
  return;
}

export async function get(id) {
  try {
    const query = "SELECT * FROM movies WHERE id=?";
    const [data] = await connection.query(query, [id]);
    return data.pop();
  } catch (error) {
    console.error(error);
  }
}

function getNextId() {
  return Math.max(...data.map((movie) => movie.id)) + 1;
}

async function insertMovie(movie) {
  try {
    const query = "INSERT INTO movies(title,year) VALUES (?,?)";
    const [result] = await connection.query(query, [movie.title, movie.year]);
    return { ...movie, id: result.insertId };
  } catch (error) {
    console.error(error);
  }
}

async function updateMovie(movie) {
  const query = "UPDATE movies SET title =? , year=? WHERE id=?";
  await connection.query(query, [movie.title, movie.year, movie.id]);
  return movie;
}
export function save(movie) {
  try {
    if (!movie.id) {
      return insertMovie(movie);
    } else {
      return updateMovie(movie);
    }
  } catch (error) {
    console.error(error);
  }
}
