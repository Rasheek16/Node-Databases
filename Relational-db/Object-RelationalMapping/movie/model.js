import { Movies } from "../orm-config.js";

export async function getAll() {
  try {
    return Movies.findAll();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function remove(id) {
  try {
    return Movies.destroy({ where: { id } });
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function get(id) {
  try {
    return Movies.findByPk(id);
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
    return Movies.upsert(movie);
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateMovie(movie) {
  try {
    return Movies.upsert(movie);
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
