// Task 1 - For Loop

for (let task1 = 1; task1 <= 10; task1++) {
    console.log(task1);
}


// Task 2 - Reverse Number

for (let task2 = 10; task2 >= 1; task2--) {
    console.log(task2);
}


// Task 3 - Even Numbers

for (let task3 = 1; task3 <= 20; task3++) {

    if (task3 % 2 == 0) {
        console.log(task3);
    }
}


// Task 4 - Odd Numbers

for (let task4 = 1; task4 <= 20; task4++) {

    if (task4 % 2 != 0) {
        console.log(task4);
    }
}


// Task 5 - Multiplication Table

let tableNumber = prompt("Enter a number") - 0;

for (let task5 = 1; task5 <= 10; task5++) {

    console.log(
        tableNumber +
        " x " +
        task5 +
        " = " +
        (tableNumber * task5)
    );
}


// Task 6 - Countdown Using While Loop

let task6 = 10;

while (task6 >= 1) {

    console.log(task6);

    task6--;
}


// Task 7 - Sum of Numbers

let task7 = 1;

let task7Sum = 0;

while (task7 <= 10) {

    task7Sum = task7Sum + task7;

    task7++;
}

console.log(task7Sum);


// Task 8 - Do While

let task8 = 1;

do {

    console.log(task8);

    task8++;

} while (task8 <= 5);



// Task 9 - Do While Understanding

let task9 = 10;

do {

    console.log(task9);

    task9++;

} while (task9 <= 5);


// Output
// 10

// do while first executes the code
// after that only it checks the condition
// so 10 is printed one time


// Task 10 - String Characters

let task10 = "javascript";

for (let letter of task10) {

    console.log(letter);
}


// Task 11 - Array Values

let task11Fruits = [
    "apple",
    "orange",
    "banana",
    "mango",
    "grapes"
];

for (let fruit of task11Fruits) {

    console.log(fruit);
}


// Task 12 - Student Names

let task12Students = [
    "Arun",
    "Priya",
    "Kumar",
    "Divya",
    "Rahul"
];

for (let student of task12Students) {

    console.log("Student: " + student);
}



// Task 13 - Employee Object

let task13Employee = {

    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in task13Employee) {

    console.log(key, task13Employee[key]);
}


// Task 14 - Product Object

let task14Product = {

    productName: "Laptop",
    price: 50000,
    brand: "HP",
    category: "Electronics",
    stock: 10
};

for (let key in task14Product) {

    console.log(key, task14Product[key]);
}


// Task 15 - Simple Function

function task15Welcome() {

    console.log("Welcome to JavaScript");
}

task15Welcome();
task15Welcome();
task15Welcome();


// Task 16 - Function With Parameter

function task16Greet(name) {

    console.log("Hello " + name);
}

task16Greet("Naveen");
task16Greet("Arun");
task16Greet("Priya");


// Task 17 - Multiple Parameters

function task17Student(name, age, department) {

    console.log("Name: " + name);

    console.log("Age: " + age);

    console.log("Department: " + department);
}

task17Student("Arun", 22, "IT");

task17Student("Priya", 21, "CSE");

task17Student("Kumar", 23, "ECE");



// Task 18 - Addition Function

function task18Add(a, b) {

    return a + b;
}

let task18Result = task18Add(10, 20);

console.log(task18Result);


// Task 19 - Salary

function task19Salary(amount) {

    return amount;
}

let task19Result = task19Salary(40000);

console.log(task19Result);


// Task 20 - Bonus Calculator

function task20Bonus(salary, bonusAmount) {

    return salary + bonusAmount;
}

let task20Total = task20Bonus(50000, 5000);

console.log("Total = " + task20Total);


// Task 21 - Default Parameter

function task21Employee(name, role = "Developer") {

    console.log("Name: " + name);

    console.log("Role: " + role);
}

task21Employee("Arun");

task21Employee("Priya", "Designer");


// Output
// Name: Arun
// Role: Developer
// Name: Priya
// Role: Designer



// Task 22 - Named Function

function task22Square(number) {

    return number * number;
}

console.log(task22Square(2));

console.log(task22Square(3));

console.log(task22Square(4));

console.log(task22Square(5));

console.log(task22Square(6));



// Task 23 - Anonymous Function

let task23Calculate = function(a, b) {

    return a + b;
};

let task23Result = task23Calculate(10, 20);

console.log(task23Result);



// Task 24 - Arrow Function

let task24Multiply = (a, b) => {

    return a * b;
};

let task24Result = task24Multiply(5, 4);

console.log(task24Result);



// Task 25 - Scope

function task25Test() {

    if (true) {

        var a = 10;

        let b = 20;

        const c = 30;

        console.log(a);

        console.log(b);

        console.log(c);
    }

    console.log(a);

    // console.log(b);

    // console.log(c);
}

task25Test();


// Inside if block
// a = 10
// b = 20
// c = 30

// Outside if block
// a can be accessed
// b cannot be accessed
// c cannot be accessed

// var is function scope
// let and const are block scope



// Task 26 - Hoisting With var

console.log(task26A);

var task26A = 10;


// Output
// undefined



// Task 27 - Hoisting With let

// console.log(task27B);

let task27B = 20;


// Output
// ReferenceError

// let cannot be accessed before initialization



// Task 28 - Hoisting With const

// console.log(task28C);

const task28C = 30;


// Output
// ReferenceError

// const cannot be accessed before initialization


// Difference

// var = undefined
// let = ReferenceError
// const = ReferenceError



// Task 29 - IIFE

(function () {

    console.log("Welcome to JavaScript");

})();


(function (product, discount) {

    console.log(
        product +
        " has " +
        discount +
        "% discount"
    );

})("Laptop", 20);



// Task 30 - Callback / Higher Order Function

function task30Welcome() {

    console.log("Welcome");
}

function task30Execute(callback) {

    callback();
}

task30Execute(task30Welcome);


// task30Welcome is Callback Function

// task30Execute is Higher Order Function



// Task 31 - Generator Function

function* task31Cashback() {

    yield "10% cashback";

    yield "20% cashback";

    yield "30% cashback";

    yield "Better luck next time";
}

let task31Offers = task31Cashback();

for (let offer of task31Offers) {

    console.log(offer);
}



// Task 32 - Employee Management System

let task32Employees = [

    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

    {
        name: "Kumar",
        age: 26,
        department: "IT",
        role: "Tester",
        salary: 45000
    }
];



// Print Every Employee Using for of

for (let employee of task32Employees) {

    console.log(employee);
}



// Print Keys and Values Using for in

for (let employee of task32Employees) {

    for (let key in employee) {

        console.log(key + ": " + employee[key]);
    }

    console.log("----------------");
}



// Function to Display Employee Information

function displayEmployee(name, age, department, role, salary) {

    console.log("Name: " + name);

    console.log("Age: " + age);

    console.log("Department: " + department);

    console.log("Role: " + role);

    console.log("Salary: " + salary);
}



// Function Parameters

for (let employee of task32Employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

    console.log("----------------");
}



// Return Employee Salary

function getEmployeeSalary(salary) {

    return salary;
}

let task32Salary =
    getEmployeeSalary(task32Employees[0].salary);

console.log("Employee Salary: " + task32Salary);



// Salary Condition

for (let employee of task32Employees) {

    if (employee.salary >= 40000) {

        console.log(
            employee.name +
            " salary is 40000 or above"
        );

    } else {

        console.log(
            employee.name +
            " salary is below 40000"
        );
    }
}



// Arrow Function

let calculateYearlySalary = (salary) => {

    return salary * 12;
};

let task32YearlySalary =
    calculateYearlySalary(task32Employees[0].salary);

console.log(
    "Yearly Salary: " +
    task32YearlySalary
);



// Generator for Employee Benefits

function* employeeBenefits() {

    yield "Medical Insurance";

    yield "Transport";

    yield "Food Allowance";

    yield "Bonus";
}

let task32Benefits = employeeBenefits();

for (let benefit of task32Benefits) {

    console.log(benefit);
}