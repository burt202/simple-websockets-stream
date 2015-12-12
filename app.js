"use strict";

var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var getStream = require("./stream");

server.listen(8080);

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  var stream = getStream();

  stream.on("data", function (message) {
    socket.emit("news", message);
  });

  stream.on("end", function () {
    console.log("done");
  });
});
