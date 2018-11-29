const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
// const animalRouter = require('./routes/animals');
// const ownerRouter = require('./routes/owners')

const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/animal_rehoming";
mongoose
  .connect(
    DB_URL,
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to data..."));

// app.use('/animals', animalRouter);
// app.use('owner', ownerRouter);

module.exports = app;
