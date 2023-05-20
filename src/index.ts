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



// console.log(Direction1.Up)
// console.log("ID", id)
