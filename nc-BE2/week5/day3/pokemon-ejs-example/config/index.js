const NODE_ENV = process.env.NODE_ENV || 'development';

const development = {
  host: 'localhost',
  port: 5432,
  database: 'pokemon'
};

const test = {
  host: 'localhost',
  port: 5432,
  database: 'pokemon_test'
};

const config = { development, test };

module.exports = config[NODE_ENV];

// can also use DB: "postgres://pauls:password123@localhost:5432/best_films" instead of DB object
