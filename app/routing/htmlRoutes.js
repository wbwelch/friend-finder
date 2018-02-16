const server = require("./../server.js");

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});

module.exports()
