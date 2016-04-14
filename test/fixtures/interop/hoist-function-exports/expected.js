"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isOdd", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(undefined)
})["isOdd"];
Object.defineProperty(exports, "nextOdd", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(nextOdd)
})["nextOdd"];

var _evens = require("./evens");

function nextOdd(n) {
  return (0, _evens.isEven)(n) ? n + 1 : n + 2;
}

var isOdd = Object.defineProperty(exports, "isOdd", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(function (isEven) {
    return function (n) {
      return !isEven(n);
    };
  }(_evens.isEven))
})["isOdd"];
