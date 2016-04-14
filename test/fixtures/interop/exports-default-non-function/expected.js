"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Cachier", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(Cachier)
})["Cachier"];
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(new Cachier())
})["default"];
function Cachier(databaseName) {}
