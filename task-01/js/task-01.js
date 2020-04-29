// "use strict";

const StringBuilder = class StringBuilder {
  constructor(baseString = "") {
    this.value = baseString;
    // this.toString.call(this);
    // return this.value.toString();
  }
};

// StringBuilder.prototype.advValue = "";

StringBuilder.prototype.append = function (str) {
  this.value = this.value + str;
  return this;
};

StringBuilder.prototype.prepend = function (str) {
  this.value = str + this.value;
  return this;
};

StringBuilder.prototype.pad = function (str) {
  this.value = str + this.value + str;
  return this;
};

// StringBuilder.prototype.toString = function toStringValue() {
//   console.log("toString");
//   return this.value;
// };
// StringBuilder.prototype.valueOf = function toValueOf() {
//   console.log("valueOf");
//   return this.value;
// };

// console.log = function (s) {
//   console.log(s + "");
// };

const ToPrimitive = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "number":
        return this.value.valueOf();
      case "string":
      default:
        return this.value.toString();
    }
  },
  valueOf() {
    return this.num;
  },
  toString() {
    return this.value;
  },
};

StringBuilder.prototype = Object.create(ToPrimitive);

// console.log = (a) => {};

const builder = new StringBuilder(".");
builder.append("^").prepend("^").pad("=");

alert(builder);
console.log(builder);
console.log([Symbol.toPrimitive]);
