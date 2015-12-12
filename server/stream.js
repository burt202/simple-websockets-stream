"use strict";

var Promise = require("bluebird");
var Readable = require("stream").Readable;

module.exports = function () {
  var stream = new Readable({objectMode: true });
  stream._read = function () {};

  var progressStep = function (message) {
    return function () {
      stream.push(message);
      Promise.resolve();
    };
  };

  var completionStep = function (message) {
    return function () {
      stream.push(message);
      stream.push(null);
      Promise.resolve();
    };
  };

  Promise.resolve()
    .then(progressStep("INITIALIZING"))
    .delay(1000)
    .then(progressStep("PROGRESS"))
    .delay(1000)
    .then(completionStep("COMPLETE"));

  return stream;
};
