require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
  },
  staging: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
