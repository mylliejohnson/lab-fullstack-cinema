const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const movies = require("./bin/seeds");
const Movie = require("./models/Movie.model.js")
const bodyParser = require('body-parser')
app.use('/', require('./routes'))


mongoose.connect("mongodb://localhost:27017/Movies", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then (async (self) => {
    await Movie.deleteMany()
    await Movie.insertMany(movies);
})
.catch((error) => {
    console.error("Error connecting to the database", error);
  });


app.listen(process.env.PORT || 5000);
