"use strict";
// Basic Types
let id = 5;
let company = 'Sam';
let isPublished = true;
let x = 'Hello';
x = true;
let age;
age = 30;
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Sam', true];
// Tuple Array
let employee;
employee = [
    [1, 'Sam'],
    [2, 'John'],
    [3, 'Jill']
];
// Union
let pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
// console.log("ID", id)
