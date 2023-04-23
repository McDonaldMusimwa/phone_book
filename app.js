const express = require("express");
const bodyParser = require("body-parser");


const mongodb = require('./db/connection');

const app = express();


app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })

  .use("/", require("./routes"));

mongodb.mongoConnect((client) => {
  console.log('The database is available',client);
  app.listen(3000);
});


