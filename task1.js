// 1. What is a variable in JavaScript?
// Answer: A variable is a container used to store a value.


// 2. What are the three keywords used to create variables?
// Answer: var, let, const


// 3. Write the syntax to create a variable using var.
// Answer:
var variableName = value;


// 4. Write the syntax to create a variable using let.
// Answer:
let variableName = value;


// 5. Write the syntax to create a variable using const.
// Answer:
const variableName = value;


// 6. What is declaration?
// Answer: Creating a variable without giving it a value.

let age;


// 7. What is initialization?
// Answer: Giving a variable its first value.

let number = 100;


// 8. What is reassignment?
// Answer: Changing the value of an existing variable.

number = 200;


// 9. What is redeclaration?
// Answer: Creating the same variable again.

var x = 10;
var x = 20;


// 10. Which keyword allows redeclaration?
// Answer: var


// 11. Which keyword allows reassignment?
// Answer: var and let


// 12. Which keyword requires initialization when declared?
// Answer: const


// 13. Identify the declaration and initialization:

// let age = 25;

// Answer:
// Declaration: let age
// Initialization: = 25


// 14. What is the value of a?

var a = 100;
console.log(a);

// Answer: 100


// 15. Change the value of this variable to 200.

let num = 100;
num = 200;


// var


// 16. What will be the output?

var a1 = 10;
console.log(a1);

// Answer: 10


// 17. What will be the output?

var a2 = 10;
a2 = 20;
console.log(a2);

// Answer: 20


// 18. What will be the output?

var a3 = 10;
var a3 = 30;
console.log(a3);

// Answer: 30


// 19. Write a var variable named name with the value "John".

var name = "John";


// 20. Create a var variable named price with the value 500.

var price = 500;


// 21. Reassign price from 500 to 1000.

price = 1000;


// 22. What will be the output?

var x1 = 50;
x1 = 100;
console.log(x1);

// Answer: 100


// 23. Can a var variable be reassigned?
// Answer: Yes.


// 24. Can a var variable be redeclared?
// Answer: Yes.


// 25. Write an example of var redeclaration.

var value = 10;
var value = 20;


// let


// 26. Create a let variable named age with the value 25.

let age1 = 25;


// 27. What will be the output?

let age2 = 20;
age2 = 30;
console.log(age2);

// Answer: 30


// 28. Can a let variable be reassigned?
// Answer: Yes.


// 29. Can a let variable be redeclared?
// Answer: No, not in the same scope.


// 30. Find the error:

// let name = "John";
// let name = "David";

// Answer:
// Error because let cannot be redeclared in the same scope.


// 31. Create a let variable called city and assign "Chennai".

let city = "Chennai";


// 32. Change the value of city to "Salem".

city = "Salem";


// 33. What will be the output?

let x2 = 10;
x2 = 50;
console.log(x2);

// Answer: 50


// 34. Write a let variable called salary with the value 25000.

let salary = 25000;


// 35. Reassign salary to 30000.

salary = 30000;


// const


// 36. Create a const variable called pi with the value 3.14.

const pi = 3.14;


// 37. Can a const variable be reassigned?
// Answer: No.


// 38. Can a const variable be redeclared?
// Answer: No.


// 39. What is wrong with this code?

// const age;
// age = 25;

// Answer:
// const must be initialized when it is declared.


// Correct example:

const constAge = 25;


// 40. What happens here?

// const price = 500;
// price = 1000;

// Answer:
// Error because const cannot be reassigned.


// 41. Create a const variable called country with the value "India".

const country = "India";


// 42. What will be the output?

const x3 = 100;
console.log(x3);

// Answer: 100


// 43. Which keyword should you use if the value should not be reassigned?
// Answer: const


// 44. What is the difference between let and const?

// Answer:
// let can be reassigned.
// const cannot be reassigned.
// const must be initialized when declared.


// 45. What is the difference between var and const?

// Answer:
// var can be reassigned and redeclared.
// const cannot be reassigned or redeclared.
// const must be initialized when declared.


// PRINTING & CONSOLE


// 46. Write JavaScript code to print Hello World.

console.log("Hello World");


// 47. Write JavaScript code to print the number 500.

console.log(500);


// 48. What is the purpose of console.warn()?

// Answer:
// It displays a warning message.

console.warn("This is a warning");


// 49. What is the purpose of console.error()?

// Answer:
// It displays an error message.

console.error("This is an error");


// 50. What is the purpose of each?


// alert()
// Answer: Shows a message box to the user.

alert("Hello");


// prompt()
// Answer: Asks the user to enter a value.

let userName = prompt("Enter your name:");


// confirm()
// Answer: Asks the user to choose OK or Cancel.

let answer = confirm("Are you sure?");


// document.writeln()
// Answer: Writes content directly on the webpage.

document.writeln("Hello World");


// console.log()
// Answer: Prints information in the browser console.

console.log("Hello World");


// PRACTICAL QUESTIONS

// 1. Create a variable for student name, age, and mark
// and print all three.

let studentName = "John";
let studentAge = 20;
let studentMark = 85;

console.log(studentName);
console.log(studentAge);
console.log(studentMark);


// 2. Ask the user's name using prompt()
// and display it using alert().

let nameFromUser = prompt("Enter your name:");
alert(nameFromUser);


// 3. Ask the user's age using prompt()
// and print it using console.log().

let ageFromUser = prompt("Enter your age:");
console.log(ageFromUser);


// 4. Ask the user a question using confirm().

let likeJavaScript = confirm("Do you like JavaScript?");
console.log(likeJavaScript);


// 5. Ask the user's name and display it
// on the webpage using document.writeln().

let webpageName = prompt("Enter your name:");
document.writeln(webpageName);