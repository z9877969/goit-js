"use strict";

const StringBuilder = class {
  constructor(baseString = "") {
    this.value = baseString;
    () => "func".call(this);
  }
};

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

const builder = new StringBuilder(".");
builder.append("^").prepend("^").pad("=");

console.log(builder.value);
