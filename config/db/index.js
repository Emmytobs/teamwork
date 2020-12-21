const { Client } = require('pg');

const dbConfig = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  host: process.env.PGHOST,
};

const client = new Client(dbConfig);

client.connect()
  .then(() => console.log('Postgres database connected successfully'))
  .catch((err) => console.log(err.stack));

module.exports = client;
