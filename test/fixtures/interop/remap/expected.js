"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var test = Object.defineProperty(exports, "test", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(2)
})["test"];
Object.defineProperty(exports, "test", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(test = 5)
})["test"];
Object.defineProperty(exports, "test", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(test += 1)
})["test"];

(function () {
  var test = 2;
  test = 3;
  test++;
})();

var a = 2;
Object.defineProperty(exports, "a", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(a)
})["a"];

Object.defineProperty(exports, "a", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(a = 3)
})["a"];

var b = 2;
Object.defineProperty(exports, "c", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(b)
})["c"];

Object.defineProperty(exports, "c", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(b = 3)
})["c"];

var d = 3;
Object.defineProperty(exports, "e", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(d)
})["e"];
Object.defineProperty(exports, "f", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(d)
})["f"];

Object.defineProperty(exports, "f", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(Object.defineProperty(exports, "e", {
    enumerable: true,
    get: function (val) {
      return function () {
        return val;
      };
    }(d = 4)
  })["e"])
})["f"];
