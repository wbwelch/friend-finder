// This route will also be used to handle the compatibility logic.

//require npm packages
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//set up express
const app = express();

//define port
const port = 3000;

//require files
var friends = require("./../data/friends.js");

//routes
var routes = {   
    api: app.get("/api/friends", function(req, res) {
        res.json(friends);
    }),
};

//friend constructor
function buildFriend(name, photo, scores) {
        this.name = name;
        this.photo = photo;
        this.scores = scores;
};
    
//post survey
app.post("/api/friends", function(req, res) {
        
    //answer variables
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
        
    //new user
    var userSubmit = new buildFriend(req.body.name, req.body.photoUrl, [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]); 
    
    //push to array
    friends.push(userSubmit);
    
    //response
    res.json(userSubmit);
});

//export routes
module.exports = routes;
