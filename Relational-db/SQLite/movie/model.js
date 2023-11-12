import database from "../sqlite-config.js";

export async function getAll() {
  try {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM Movies";
      database.all(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function remove(id) {
  try {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM movies WHERE id=?";
      database.run(query, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function get(id) {
  try {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM Movies WHERE id=?";
      database.get(query, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

function getNextId() {
  return Math.max(...data.map((movie) => movie.id)) + 1;
}

async function insertMovie(movie) {
  try {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO Movies(title,year) VALUES(?,?)";
      database.run(query, [movie.title, movie.year], function (error, results) {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
        console.log(this.lastID);
      });
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateMovie(movie) {
  try {
    return new Promise((resolve, reject) => {
      const query = "UPDATE TABLE Movies SET title=?, year=? WHERE id=?";
      database.run(
        query,
        [movie.title, movie.year, movie.id],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
    });
  } catch (error) {
    return null;
  }
}

export function save(movie) {
  if (!movie.id) {
    insertMovie(movie);
  } else {
    updateMovie(movie);
  }
}
