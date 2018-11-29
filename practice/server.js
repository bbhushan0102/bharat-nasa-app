const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/", function(req, res) {
  res.send("hello world");
});
app.post("/", function(req, res) {
  res.send("got a post request");
});
app.put("/my-route", function(req, res) {
  res.send("Got a PUT request at /user");
});
app.delete("/user", function(req, res) {
  res.send("Got a DELETE request at /user");
});

app.listen(3000);
console.log("running on port 30000...");
