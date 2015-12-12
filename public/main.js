"use strict";

var io = require("socket.io-client");

document.querySelector(".button").addEventListener("click", function () {
  var socket = io.connect("http://localhost:8080/run");
  socket.on("news", function (data) {
    var p = document.createElement("p");
    p.innerHTML = JSON.stringify(data);
    document.querySelector(".output").appendChild(p);
  });
});
