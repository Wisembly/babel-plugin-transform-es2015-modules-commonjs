"use strict";

Object.defineProperty(exports, "foo", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(foo)
})["foo"];
function foo() {}
