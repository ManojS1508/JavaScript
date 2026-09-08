// Task 1 - var, let, const

var studentName = "Mano";
let studentAge = 22;
const studentCollege = "Dhanalakshmi Srinivasan College of Engineering";


// 1.Print all three values.
console.log(studentName);
console.log(studentAge);
console.log(studentCollege);

// 2.Change the var value.
studentName = "Manoj";

// 3.Change the let value.
studentAge = 23;

console.log(studentName);
console.log(studentAge);

// 4.Try changing the const value and observe the error.
// studentCollege = "DSCE"; // This will cause an assignment to constant variable error because const values cannot be reassigned.

// 5.Try redeclaring the var variable.
var studentName = "Manoj Selvam";
console.log(studentName);

// 6.Try redeclaring the let variable and observe the error.
// let studentAge = 24; // This will cause a syntax error because let variables cannot be redeclared in the same scope.



// Task 2 - User Information

let userName = prompt("Enter your name");
let userAge = prompt("Enter your age");
let city = prompt("Enter your city");

console.log("Name: " + userName);
console.log("Age: " + userAge);
console.log("City: " + city);



// Task 3 - Welcome Message

let personName = prompt("Enter your name");

alert("Welcome " + personName + "!");



// Task 4 -  Age Calculator

let birthYear = prompt("Enter your birth year");
let currentYear = 2026;

let currentAge = currentYear - birthYear;

console.log("Birth Year: " + birthYear);
console.log("Age: " + currentAge);



// Task 5 - Identify Data Types

let x1 = "Hello";
let x2 = 100;
let x3 = 25.5;
let x4 = true;
let x5 = false;
let x6 = undefined;
let x7 = null;

console.log(typeof(x1));
console.log(typeof(x2));
console.log(typeof(x3));
console.log(typeof(x4));
console.log(typeof(x5));
console.log(typeof(x6));
console.log(typeof(x7));



// Task 6 - Student Data

let students = {
    name: "Manoj",
    age: 23,
    city: "Dharmapuri",
    qualification: "BE-EEE",
    isStudent: true
};

console.log(students.name);
console.log(students.age);
console.log(students.city);
console.log(students.qualification);
console.log(students.isStudent);



// Task 7

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);



// Task 8 - Basic Calculator

let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


 
// Task 9 - Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Total = " + total);



// Task 10 - Simple Marks Calculation

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log("Total marks = " + totalMarks);
console.log("Average marks = " + averageMarks);


 
// Task 11 - Post Increment

// Expected
// 11
// 10

let a1 = 10;
let b1 = a1++;

console.log(a1);
console.log(b1);


// Task 12 -  Pre Increment

// Expected
// 11
// 11

let a2 = 10;
let b2 = ++a2;

console.log(a2);
console.log(b2);


// Task 13 - Post Decrement

// Expected
// 19
// 20

let a3 = 20;
let b3 = a3--;

console.log(a3);
console.log(b3);


// Task 14 -  Pre Decrement

// Expected
// 19
// 19

let a4 = 20;
let b4 = --a4;

console.log(a4);
console.log(b4);


// Task 15 - Find the Final Values

// Expected
// a5 = 7
// b5 = 4
// c5 = 7
// d5 = 5

let a5  = 5;
let b5 = a5++;
let c5 = ++a5;
let d5 = b5--;

console.log(a5);
console.log(b5);
console.log(c5);
console.log(d5);


// Task 16 - Assignment Operators

let n1 = 10;
n1 += 5;
console.log(n1);

let n2 = 10;
n2 -= 5;
console.log(n2);

let n3 = 10;
n3 *= 5;
console.log(n3);

let n4 = 10;
n4 /= 5;
console.log(n4);

let n5 = 10;
n5 %= 5;
console.log(n5);

let n6 = 10;
n6 **= 2;
console.log(n6);


// Task 17 - Mini Student Profile

let studentName1 = "Manoj";
let studentAge1 = 23;
let studentCity1 = "Dharmapuri";
let studentCollege1 = "Dhanalakshmi Srinivasan College of Engineering";

let subjects = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "MySQL"
];

let student = {
    name: studentName1,
    age: studentAge1,
    city: studentCity1,
    subjects: subjects,
    isStudent: true
};

console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.subjects[0]);
console.log(student.subjects[student.subjects.length - 1]);
console.log(student.subjects.length);
console.log(student);



// Final Challenge -  User + Calculator
 
let first = prompt("Enter first number") - 0;
let second = prompt("Enter second number") - 0;

console.log("Addition = " + (first + second));
console.log("Subtraction = " + (first - second));
console.log("Multiplication = " + (first * second));
console.log("Division = " + (first / second));
console.log("Modulus = " + (first % second));
console.log("Power = " + (first ** second));