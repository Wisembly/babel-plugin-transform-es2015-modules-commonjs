"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "test", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(undefined)
})["test"];

require("foo");

require("foo-bar");

require("./directory/foo-bar");

var _foo = require("foo2");

var _foo2 = babelHelpers.interopRequireDefault(_foo);

var _foo3 = require("foo3");

var foo2 = babelHelpers.interopRequireWildcard(_foo3);

var _foo4 = require("foo4");

var _foo5 = require("foo5");

Object.defineProperty(exports, "test", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(test)
})["test"];
var test = Object.defineProperty(exports, "test", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(5)
})["test"];

_foo4.bar;
_foo5.foo;
_foo2.default;
