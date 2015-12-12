"use strict";

var getStream = require("./stream");

module.exports = function (io) {
  io
  .of("/run")
  .on("connection", function (socket) {
    var stream = getStream();

    stream.on("data", function (message) {
      socket.emit("news", message);
    });

    stream.on("end", function () {
      console.log("done");
    });
  });
};
