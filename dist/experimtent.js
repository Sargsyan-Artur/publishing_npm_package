"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayGoodbye = exports.sayHello = void 0;
require("dotenv/config");
function sayHello() {
    console.log('hi');
}
exports.sayHello = sayHello;
function sayGoodbye() {
    console.log('goodbye');
    console.log(process.env.PROJECT);
    console.log("aa=====", browser);
}
exports.sayGoodbye = sayGoodbye;
