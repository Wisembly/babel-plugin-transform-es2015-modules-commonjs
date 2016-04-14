"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var foo = Object.defineProperty(exports, "foo", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(function foo(gen) {
    var ctx = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  })
})["foo"];

var bar = Object.defineProperty(exports, "bar", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(function bar(gen) {
    var ctx = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  })
})["bar"];
