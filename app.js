"use strict";

var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(8080);

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  socket.emit("news", { hello: "world1" });
  socket.emit("news", { hello: "world2" });
  socket.emit("news", { hello: "world3" });
  socket.emit("news", { hello: "world4" });
  socket.emit("news", { hello: "world5" });
});