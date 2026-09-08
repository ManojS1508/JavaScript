// Q1 - Difference Between var, let and const

// var
// can be re-declared
// can be re-assigned
// function scoped

var q1A = 10;

var q1A = 20;

q1A = 30;

console.log(q1A);


// Output
// 30


// let
// cannot be re-declared in the same scope
// can be re-assigned
// block scoped

let q1B = 10;

q1B = 20;

console.log(q1B);


// Output
// 20


// const
// cannot be re-declared
// cannot be re-assigned
// block scoped
// value must be given during declaration

const q1C = 10;

console.log(q1C);


// Output
// 10



// Q2 - Re-declaration

var q2A = 10;

var q2A = 20;

console.log(q2A);


// Output
// 20


// var can be re-declared


let q2B = 10;

// let q2B = 20;


// Error
// let cannot be re-declared in the same scope


const q2C = 10;

// const q2C = 20;


// Error
// const cannot be re-declared in the same scope


// Q3 - Re-assignment With const

var q3X = 5;

let q3Y = 10;

const q3Z = 15;

q3X = 20;

q3Y = 25;

// q3Z = 30;


// If q3Z = 30 is executed

// Output
// TypeError: Assignment to constant variable

console.log(q3X, q3Y, q3Z);

// Output when q3Z reassignment is commented
// 20 25 15


// const variable cannot be re-assigned

// Q4 - Declaration and Initialization

let q4A;


// Declaration
// variable is created without assigning a value


q4A = 10;


// Initialization / Assignment
// value is assigned to the variable

console.log(q4A);

// Output
// 10


// Q5 - Undefined

let q5A;

console.log(q5A);


// Output
// undefined


// variable is declared
// but value is not assigned


// Q6 - Hoisting

console.log(q6A);

var q6A = 10;


// Output
// undefined


// var declaration is hoisted
// value assignment happens later


// JavaScript treats it like

// var q6A;
// console.log(q6A);
// q6A = 10;


// let and const cannot be accessed
// before initialization


// console.log(q6B);

let q6B = 20;


// Output
// ReferenceError


// let is in Temporal Dead Zone
// before initialization



// Q7 - null and undefined

let q7A = null;

let q7B;


console.log(q7A);

console.log(q7B);


// Output
// null
// undefined


// null means intentionally empty value

// undefined means value is not assigned


// Q8 - typeof

console.log(typeof null);

console.log(typeof undefined);

console.log(typeof []);

console.log(typeof {});


// Output
// object
// undefined
// object
// object


// typeof null returns object
// this is a historical JavaScript behavior



// Q9 - Difference Between == and ===

console.log(5 == "5");

console.log(5 === "5");


// Output
// true
// false


// == checks values after type conversion

// === checks both value and data type



// Q10 - Difference Between ++i and i++

let q10A = 5;

console.log(++q10A);


// Output
// 6


// ++i is pre-increment
// first increases the value
// then returns the value


let q10B = 5;

console.log(q10B++);

console.log(q10B);


// Output
// 5
// 6


// i++ is post-increment
// first returns current value
// then increases the value


// Q11 - Arithmetic Operators With String

let q11X = 10;

let q11Y = "5";


console.log(q11X + q11Y);

console.log(q11X - q11Y);

console.log(q11X * q11Y);

console.log(q11X / q11Y);


// Output
// 105
// 5
// 50
// 2


// + performs string concatenation

// -, * and / convert
// string "5" into number automatically


// Q12 - Logical Operators

// && AND Operator
// both conditions must be true

console.log(5 > 3 && 10 > 5);


// Output
// true


// || OR Operator
// at least one condition must be true

console.log(5 > 10 || 10 > 5);


// Output
// true


// ! NOT Operator
// reverses true to false
// and false to true

console.log(!(5 > 3));


// Output
// false



// Q13 - Logical Operator Output

console.log(5 > 3 && 10 > 5);

console.log(5 > 10 || 10 > 5);

console.log(!(5 > 3));


// Output
// true
// true
// false



// Q14 - Ternary Operator

let q14Age = 20;

let q14Result =
    q14Age >= 18
        ? "Adult"
        : "Minor";


console.log(q14Result);


// Output
// Adult


// ternary operator is a short form of if else


// Syntax
// condition ? valueIfTrue : valueIfFalse


// Q15 - Implicit and Explicit Type Casting

// Implicit Type Casting

let q15A = 10 + "5";

console.log(q15A);


// Output
// 105


// JavaScript automatically converts
// number 10 into string


// Explicit Type Casting

let q15B = Number("100");

console.log(q15B);


// Output
// 100


// programmer manually converts
// one data type into another



// Q16 - Type Casting Output

console.log(Number("123"));

console.log(Number("hello"));

console.log(Number(true));

console.log(Number(false));

console.log(Boolean(0));

console.log(Boolean("hello"));


// Output
// 123
// NaN
// 1
// 0
// false
// true



// Q17 - NaN

let q17Result = Number("hello");

console.log(q17Result);


// Output
// NaN


// NaN means Not a Number

// it occurs when JavaScript
// cannot convert a value into a valid number



// Q18 - Difference Between if-else and switch

let q18Age = 20;


if (q18Age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");
}


// Output
// Adult


// if else is useful for
// conditions and ranges


let q18Day = 2;


switch (q18Day) {

    case 1:

        console.log("Monday");

        break;

    case 2:

        console.log("Tuesday");

        break;

    case 3:

        console.log("Wednesday");

        break;

    default:

        console.log("Invalid Day");
}


// Output
// Tuesday


// switch is useful for comparing
// one value with multiple fixed cases



// Q19 - if else Output

let q19Age = 20;


if (q19Age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");
}


// Output
// Adult



// Q20 - Nested if

let q20Age = 20;

let q20HasID = true;


if (q20Age >= 18) {

    if (q20HasID == true) {

        console.log("Allowed");

    } else {

        console.log("ID Required");
    }

} else {

    console.log("Minor");
}


// Output
// Allowed


// nested if means
// an if statement inside another if statement



// Q21 - Even or Odd Using Ternary Operator

let q21Number = 10;


let q21Result =
    q21Number % 2 == 0
        ? "Even"
        : "Odd";


console.log(q21Result);


// Output
// Even



// Q22 - Difference Between while and do while

let q22A = 1;


while (q22A <= 3) {

    console.log(q22A);

    q22A++;
}


// Output
// 1
// 2
// 3


// while checks the condition first
// then executes the code


let q22B = 5;


do {

    console.log(q22B);

    q22B++;

} while (q22B <= 3);


// Output
// 5


// do while executes code first
// after that checks the condition

// so it executes at least one time



// Q23 - For Loop Output

for (let q23I = 1; q23I <= 5; q23I++) {

    console.log(q23I);
}


// Output
// 1
// 2
// 3
// 4
// 5



// Q24 - Difference Between for-of and for-in

let q24Fruits = [

    "Apple",

    "Orange",

    "Banana"
];


for (let fruit of q24Fruits) {

    console.log(fruit);
}


// Output
// Apple
// Orange
// Banana


// for-of is mainly used
// to get values from iterable objects


let q24Employee = {

    name: "Arun",

    age: 25,

    role: "Developer"
};


for (let key in q24Employee) {

    console.log(
        key + ": " +
        q24Employee[key]
    );
}


// Output
// name: Arun
// age: 25
// role: Developer


// for-in is used
// to get keys or property names



// Q25 - Sum of Numbers From 1 to 100

let q25Sum = 0;


for (let q25I = 1; q25I <= 100; q25I++) {

    q25Sum =
        q25Sum + q25I;
}


console.log(q25Sum);


// Output
// 5050



// Q26 - Difference Between slice and splice

let q26Numbers = [

    1,

    2,

    3,

    4,

    5
];


let q26Slice =
    q26Numbers.slice(1, 4);


console.log(q26Slice);

console.log(q26Numbers);


// Output
// [2, 3, 4]
// [1, 2, 3, 4, 5]


// slice returns selected elements
// without changing the original array



let q26Values = [

    1,

    2,

    3,

    4,

    5
];


q26Values.splice(1, 2);


console.log(q26Values);


// Output
// [1, 4, 5]


// splice can add, remove or replace elements

// splice modifies the original array



// Q27 - Array Methods Output

let q27Arr = [

    1,

    2,

    3
];


q27Arr.push(4);


// Array becomes
// [1, 2, 3, 4]


q27Arr.pop();


// Array becomes
// [1, 2, 3]


q27Arr.unshift(0);


// Array becomes
// [0, 1, 2, 3]


q27Arr.shift();


// Array becomes
// [1, 2, 3]


console.log(q27Arr);


// Output
// [1, 2, 3]



// Q28 - Function Declaration and Function Expression

// Function Declaration

function q28Welcome() {

    console.log("Welcome");
}


q28Welcome();


// Output
// Welcome


// function declaration
// defines a function using a function name

// function declaration is hoisted



// Function Expression

let q28Greet = function () {

    console.log("Hello");
};


q28Greet();


// Output
// Hello


// function expression means
// a function is stored inside a variable



// Q29 - Arrow Function

let q29Add = (a, b) => {

    return a + b;
};


let q29Result =
    q29Add(10, 20);


console.log(q29Result);


// Output
// 30


// arrow function is a shorter syntax
// used to write functions



// Q30 - Function Output

function q30Greet() {

    return "Hello";
}


let q30Message =
    q30Greet();


console.log(q30Message);


// Output
// Hello


// greet function returns "Hello"

// returned value is stored
// inside q30Message