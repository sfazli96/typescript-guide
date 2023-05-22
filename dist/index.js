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
// enum Direction1 {
//     Up,
//     Down,
//     Left,
//     Right
// }
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log(('test'));
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        // console.log(123)
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now a registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike Jordan');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(brad.register());
console.log(emp.name);
console.log(emp.register());
console.log(brad, mike);
// console.log(Direction1.Up)
// console.log("ID", id)
