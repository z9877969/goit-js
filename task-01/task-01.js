"use strict";

const StringBuilder = class {
  constructor(baseString = "") {
    this.value = baseString;
  }
  // static message = 5;

  // #f() {
  //   return this.value;
  // }
};

StringBuilder.prototype.append = function (str) {
  this.value = this.value + str.toString();
  console.log("append", this);
  return this;
};

StringBuilder.prototype.prepend = function (str) {
  this.value = str.toString() + this.value;
  console.log("prepend", this);
  return this;
};

StringBuilder.prototype.pad = function (str) {
  this.value = str.toString() + this.value + str.toString();
  console.log("pad", this);
  return this;
};

const builder = new StringBuilder(".");
builder.append("^").prepend("^").pad("=");

console.log(builder);
console.log(StringBuilder.message);

class ClassWithStaticField {
  static baseStaticField = "base field";
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = "sub class field";
}

console.log(SubClassWithStaticField.subStaticField);
// Ожидаемый вывод: "sub class field"

console.log(SubClassWithStaticField.baseStaticField);
// Ожидаемый вывод: "base field"

// class ClassWithPrivateAccessor {
//   #message;
//   constructor() {
//     this.#decoratedMessage = "hello world";
//     console.log(this.#decoratedMessage);
//   }

//   get #decoratedMessage() {
//     return `${this.#message}`;
//   }

//   // set #decoratedMessage(msg) {
//   //   this.#message = msg;
//   // }
// }

// new ClassWithPrivateAccessor();
