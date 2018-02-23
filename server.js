//require packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//require files
const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

//set up express
const app = express();

//port
const port = 3000;

// Use the express.static middleware
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use routes
app.use(htmlRoutes.index);
app.use(htmlRoutes.indexHome);
app.use(htmlRoutes.survey);
app.use(apiRoutes.api);


//listener
app.listen(port, function() {
  console.log("Listening on PORT " + port);
}); 
