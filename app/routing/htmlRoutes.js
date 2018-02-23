//require packages
const express = require("express");
const path = require("path");
const port = 3000;

//set up express
const app = express();

//routes object
var routes = {   
    
        //index '/'
        index: app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }),
    
        //index 'home.html'
        indexHome: app.get("/home.html", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }),

        //survey
        survey: app.get("/survey", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        })
};

//export routes
module.exports = routes;