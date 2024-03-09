console.log("Hello world")

// TypeScript functions 1. Type checking, 2. Code completion 3. Refactoring
// Shorthand notations
let a: number = 10
a = 10

//Typerscript shortcomings
//complilation
//disciplined
let b = 4
console.log(b)

let age: number = 20;
if (age < 50){
    age += 10;
};

// JavaCript Types
//(number, string, boolean, null, undefined, object)
//TypeScript adds an extention to this
// (any, unknown, never, enum, tuple)

let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;

level = 20;

level = 40;

level = 'hello'

console.log(level)

const helloWorld = (document: number[]) => {
    console.log(document)
}

let numbers: number[] = [1, 2, 3];

let hello: number[] = [3]

helloWorld(hello)