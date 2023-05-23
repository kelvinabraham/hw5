const express = require("express");

const app = express();

const path = require("path");

const db = require("./queries");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: ture }));

const PORT = 9001;

// host react app as static files
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Routes
app.get("/", (req, res) => {
  // we'll do some stuff here
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/test", (req, res) => {
  res.status(200).send("Hey this is the test route for testing!!!");
});
//CRUD
// CREATE - add data to db
// READ - get data from db
app.get("/links", db.getLinks);

app.post("/links", db, createLink);
// UPDATE - update data in db
// DELETE - remove data from db

// Starting Express on our PORT
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`);
});
