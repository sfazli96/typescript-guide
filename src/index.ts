// Basic Types
let id: number = 5
let company: string = 'Sam'
let isPublished: boolean = true
let x: any = 'Hello'
x = true
let age: number
age = 30

// Arrays
let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Sam', true]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Sam'],
    [2, 'John'],
    [3, 'Jill']
]

// Union
let pid: string | number = 22

// Enum
// enum Direction1 {
//     Up,
//     Down,
//     Left,
//     Right
// }

enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1, 2))

function log(message: string | number): void {
    console.log(message)
}

log(('test'))

// Function Interfaces
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        // console.log(123)
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now a registered`
    }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike Jordan')

// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn',  'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

// numArray.push('hello')

// console.log(brad.register())
// console.log(emp.name)
// console.log(emp.register())

// console.log(brad, mike)

// console.log(Direction1.Up)
// console.log("ID", id)
