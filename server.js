const express = require("express");

const SERVER_PORT = 8088;

const app = express();

app.get("/hello", (req, res) => {
  res.send("<h1>Hello Express.js</h1>");
});

app.get("/user", (req, res) => {
  var user = {
    firstname: "Pritesh",
    lastname: "Patel",
  };
  res.send(JSON.stringify(user));
});


app.post("/user/:firstname/:lastname", (req, res) => {

    var user_fname = req.params.firstname;
    var user_lname = req.params.lastname;

    res.send(JSON.stringify(req.params))

});

app.listen(SERVER_PORT, () => {
  console.log(`Server started at localhost:${SERVER_PORT}`);
});
