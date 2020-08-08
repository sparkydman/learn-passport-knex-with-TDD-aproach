const databaseName = "passport_local_knex";
const password = "chigo@213";
const username = "postgres";

module.exports = {
  development: {
    client: "postgresql",
    connection: `postgres://${username}:${password}@localhost:5432/${databaseName}`,
    migrations: {
      directory: __dirname + "/src/server/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/server/db/seeds",
    },
  },
  test: {
    client: "postgresql",
    connection: `postgres://${username}:${password}@localhost:5432/${databaseName}_test`,
    migrations: {
      directory: __dirname + "/src/server/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/server/db/seeds",
    },
  },
};
