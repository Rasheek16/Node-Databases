import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./movie.db",
});

export const Movies = sequelize.define(
  "Movies",
  {
    title: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
