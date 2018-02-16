const express = require("express");
const bodyParser = require("bodu-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Use the express.static middleware
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

