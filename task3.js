// Task 1 - Variables

var t1Name = "Mano";
let t1Age = 22;
const t1City = "Dharmapuri";
var t1College = "Dhanalakshmi Srinivasan College of Engineering";

console.log(t1Name);
console.log(t1Age);
console.log(t1City);
console.log(t1College);

t1Name = "Manoj";
t1Age = 23;

console.log(t1Name);
console.log(t1Age);

// const value cannot be changed
// t1City = "Chennai";

// var can be redeclared
var t1Name = "Manoj Selvam";
console.log(t1Name);

// let cannot be redeclared
// let t1Age = 24;

// const cannot be redeclared
// const t1City = "Chennai";


// Task 2 - Printing Statements

console.log("Welcome to JavaScript");

alert("Hello! Welcome");

let t2Confirm = confirm("Are you ready to learn JavaScript?");
console.log(t2Confirm);

let t2Name = prompt("Enter your name");
console.log(t2Name);

document.writeln("JavaScript Printing Statements Task <br>");


// Task 3 - User Details

let userName = prompt("Enter your name");
let userAge = prompt("Enter your age");
let userCity = prompt("Enter your city");
let userQualification = prompt("Enter your qualification");

console.log("Name: " + userName);
console.log("Age: " + userAge);
console.log("City: " + userCity);
console.log("Qualification: " + userQualification);


// Task 4 - Find Data Types

let data1 = "JavaScript";
let data2 = 100;
let data3 = 99.5;
let data4 = true;
let data5 = false;
let data6 = undefined;
let data7 = null;

console.log(data1, typeof data1);
console.log(data2, typeof data2);
console.log(data3, typeof data3);
console.log(data4, typeof data4);
console.log(data5, typeof data5);
console.log(data6, typeof data6);
console.log(data7, typeof data7);



// Task 5 - Student Array

let students = [
    "Arun",
    "Priya",
    "Kumar",
    "Divya",
    "Rahul"
];

console.log("First Student: " + students[0]);
console.log("Second Student: " + students[1]);
console.log("Last Student: " + students[students.length - 1]);
console.log("Total Students: " + students.length);



// Task 6 - Employee Object

let employee = {
    name: "Manoj",
    age: 22,
    role: "Python Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    isWorking: true,
    qualification: ["12th", "B.E EEE"]
};

console.log("Employee Name: " + employee.name);
console.log("Age: " + employee.age);
console.log("Role: " + employee.role);
console.log("First Skill: " + employee.skills[0]);
console.log(
    "Last Qualification: " +
    employee.qualification[employee.qualification.length - 1]
);
console.log("Working Status: " + employee.isWorking);



// Task 7 - Calculator

let a = 20;
let b = 5;

console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));
console.log("Exponentiation: " + (a ** b));


// Task 8 - Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let totalPrice = shirt + pant + shoes + bag;

console.log("Total Price: " + totalPrice);


// Task 9 - Increment and Decrement

// A
// Expected Output
// a = 11
// b = 10

let t9A = 10;
let t9B = t9A++;

console.log(t9A);
console.log(t9B);


// B
// Expected Output
// a = 11
// b = 11

let t9C = 10;
let t9D = ++t9C;

console.log(t9C);
console.log(t9D);


// C
// Expected Output
// a = 9
// b = 10

let t9E = 10;
let t9F = t9E--;

console.log(t9E);
console.log(t9F);


// D
// Expected Output
// a = 9
// b = 9

let t9G = 10;
let t9H = --t9G;

console.log(t9G);
console.log(t9H);



// Task 10 - Assignment Operators

let num1 = 10;
num1 += 5;
console.log(num1);

let num2 = 10;
num2 -= 3;
console.log(num2);

let num3 = 10;
num3 *= 2;
console.log(num3);

let num4 = 10;
num4 /= 4;
console.log(num4);

let num5 = 10;
num5 %= 3;
console.log(num5);

let num6 = 10;
num6 **= 2;
console.log(num6);



// Task 11 - Comparison Operators

// Expected Output
// true
// false
// true
// false
// true
// false
// false
// true

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");



// Task 12 - AND Operator

// Expected Output
// true
// false
// false
// false

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);



// Task 13 - OR Operator

// Expected Output
// true
// true
// true
// false

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);



// Task 14 - NOT Operator

// Expected Output
// false
// true
// true
// false

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));



// Task 15 - Combination

// Expected Output
// false
// true
// true
// true

console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");



// Task 16 - Voting Ternary Operator

let age1 = 20;

let result = age1 >= 18 ? "Eligible to vote" : "Not eligible";

console.log(result);


// Task 17 - Password Ternary Operator

let password = true;

let loginResult = password ? "Login successful" : "Wrong password";

console.log(loginResult);


// Task 18 - User Introduction

let introName = "Naveen";
let introAge = 25;
let introCity = "Trichy";

// Using +

console.log(
    "My name is " +
    introName +
    ". I am " +
    introAge +
    " years old. I live in " +
    introCity +
    "."
);

// Using Template Literal

console.log(
    `My name is ${introName}. I am ${introAge} years old. I live in ${introCity}.`
);



// Task 19 - String Conversion

let string1 = String(100);
let string2 = String(true);
let string3 = String(undefined);
let string4 = String(null);
let string5 = String([1, 2]);

console.log(string1, typeof string1);
console.log(string2, typeof string2);
console.log(string3, typeof string3);
console.log(string4, typeof string4);
console.log(string5, typeof string5);



// Task 20 - Number Conversion

// Expected Output
// 0
// 0
// 123
// NaN
// 1
// 0
// NaN
// 0

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));



// Task 21 - Boolean Conversion

// Expected Output
// false
// false
// true
// true
// true
// false
// false
// false
// true
// true

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));



// Task 22 - Voting Eligibility

let age2 = prompt("Enter your age") - 0;

if (age2 >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}



// Task 23 - Positive or Negative

let checkNumber = prompt("Enter a number") - 0;

if (checkNumber > 0) {
    console.log("Positive");
} else if (checkNumber < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}



// Task 24 - Grade System

let marks = prompt("Enter your marks") - 0;

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80 && marks <= 89) {
    console.log("B Grade");
} else if (marks >= 70 && marks <= 79) {
    console.log("C Grade");
} else if (marks >= 60 && marks <= 69) {
    console.log("D Grade");
} else {
    console.log("Fail");
}



// Task 25 - Job Eligibility

let age3 = prompt("Enter your age") - 0;
let height = prompt("Enter your height") - 0;
let weight = prompt("Enter your weight") - 0;

if (age3 >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("Weight should be 60 or above");
        }

    } else {
        console.log("Height should be 160 or above");
    }

} else {
    console.log("Age should be 18 or above");
}



// Task 26 - Traffic Light

let light = prompt("Enter traffic light color");

switch (light) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}



// Task 27 - Day

let day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}



// Task 28 - Student Result System

let finalName = prompt("Enter student name");
let finalAge = prompt("Enter student age") - 0;
let finalCity = prompt("Enter city");

let tamilMark = prompt("Enter Tamil mark") - 0;
let englishMark = prompt("Enter English mark") - 0;
let mathsMark = prompt("Enter Maths mark") - 0;

let finalTotal = tamilMark + englishMark + mathsMark;

let finalAverage = finalTotal / 3;

let finalGrade;

if (finalAverage >= 90) {
    finalGrade = "A";
} else if (finalAverage >= 80) {
    finalGrade = "B";
} else if (finalAverage >= 70) {
    finalGrade = "C";
} else if (finalAverage >= 60) {
    finalGrade = "D";
} else {
    finalGrade = "Fail";
}

let finalVoting;

if (finalAge >= 18) {
    finalVoting = "Eligible";
} else {
    finalVoting = "Not Eligible";
}

console.log(`
Name: ${finalName}
Age: ${finalAge}
City: ${finalCity}
Total: ${finalTotal}
Average: ${finalAverage.toFixed(2)}
Grade: ${finalGrade}
Voting: ${finalVoting}
`);