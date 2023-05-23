// Connect to Postgres using the node-postgres package

const POOL = require("pg").Pool;

const pool = new POOL({
  user: "me",
  host: "localhost",
  database: "api",
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// Create all the functions that will be our request handlers in our express server

// Create a new link in the db

// Read all the data fromc db
const createLink = (req, res) => {
  const name = request.body.name;
  const URL = request.body.URL;

  if (name && URL) {
    pool.query(
      pool.query(
        "INSERT INTO links(name, URL) VALUES ($1 , $2)",
        [name, URL],
        (error, results) => {
          if (error) {
            throw error;
          }
          response.status(201).send("Link added");
        }
      )
    );
  } else {
    response
      .status(403)
      .send("server is epxecting data object with name and URL");
  }
};

const getLinks = (req, res) => {
  pool.query("SELECT * FROM links ORDER BY id ASC", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};

// Update link in the db

// Delete link in the db

module.exports = {
  getLinks,
};
