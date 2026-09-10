// Task 1 - Student Result Analyzer

// Get Student Details

let task1Name = prompt("Enter student name");

let task1Department = prompt("Enter department");


// Get 5 Subject Marks

let task1Mark1 = Number(prompt("Enter Subject 1 Mark"));

let task1Mark2 = Number(prompt("Enter Subject 2 Mark"));

let task1Mark3 = Number(prompt("Enter Subject 3 Mark"));

let task1Mark4 = Number(prompt("Enter Subject 4 Mark"));

let task1Mark5 = Number(prompt("Enter Subject 5 Mark"));


// Function

function analyzeStudent(
    name,
    department,
    mark1,
    mark2,
    mark3,
    mark4,
    mark5
) {

    let total =
        mark1 +
        mark2 +
        mark3 +
        mark4 +
        mark5;


    let average = total / 5;


    let result;

    let grade;


    // Pass or Fail

    if (average >= 50) {

        result = "Pass";

    } else {

        result = "Fail";
    }


    // Grade

    if (average >= 90) {

        grade = "A";

    } else if (average >= 75) {

        grade = "B";

    } else if (average >= 60) {

        grade = "C";

    } else if (average >= 50) {

        grade = "D";

    } else {

        grade = "Fail";
    }


    console.log("Name: " + name);

    console.log("Department: " + department);

    console.log("Total Marks: " + total);

    console.log("Average: " + average);

    console.log("Result: " + result);

    console.log("Grade: " + grade);
}


analyzeStudent(
    task1Name,
    task1Department,
    task1Mark1,
    task1Mark2,
    task1Mark3,
    task1Mark4,
    task1Mark5
);


// Task 2 - Employee Salary Calculator

// Employee Object

let task2Employee = {

    name: "Arun",

    role: "Developer",

    salary: 45000,

    experience: 2
};


// Function

function calculateSalary(employee) {

    let basicSalary = employee.salary;

    let bonus = 0;


    // 15% Bonus

    if (employee.experience >= 5) {

        bonus =
            basicSalary * 15 / 100;


    // 10% Bonus

    } else if (employee.experience >= 2) {

        bonus =
            basicSalary * 10 / 100;
    }


    let finalSalary =
        basicSalary + bonus;


    console.log(
        "Employee Name: " +
        employee.name
    );

    console.log(
        "Role: " +
        employee.role
    );

    console.log(
        "Basic Salary: " +
        basicSalary
    );

    console.log(
        "Bonus: " +
        bonus
    );

    console.log(
        "Final Salary: " +
        finalSalary
    );
}


calculateSalary(task2Employee);

// Task 3 - Product Filter System

let task3Products = [

    {
        name: "Laptop",
        price: 55000,
        category: "electronics"
    },

    {
        name: "Mouse",
        price: 800,
        category: "electronics"
    },

    {
        name: "Shirt",
        price: 1200,
        category: "fashion"
    },

    {
        name: "Shoes",
        price: 2500,
        category: "fashion"
    },

    {
        name: "Phone",
        price: 30000,
        category: "electronics"
    }
];


// 1. Products Above 2000

let task3Above2000 =
    task3Products.filter(
        function(product) {

            return product.price > 2000;
        }
    );


console.log("Products Above 2000:");

console.log(task3Above2000);

// 2. Electronics Products

let task3Electronics =
    task3Products.filter(
        function(product) {

            return product.category == "electronics";
        }
    );


console.log("Electronics:");

console.log(task3Electronics);

// 3. First Product Below 1000

let task3Below1000 =
    task3Products.find(
        function(product) {

            return product.price < 1000;
        }
    );


console.log("First Product Below 1000:");

console.log(task3Below1000);

// 4. Total Price

let task3TotalPrice =
    task3Products.reduce(
        function(total, product) {

            return total + product.price;

        }, 0
    );


console.log(
    "Total Price: " +
    task3TotalPrice
);

// 5. Any Product Above 50000

let task3Above50000 =
    task3Products.some(
        function(product) {

            return product.price > 50000;
        }
    );

console.log(
    "Any Product Above 50000: " +
    task3Above50000
);

// 6. Every Product Above 500

let task3Above500 =
    task3Products.every(
        function(product) {

            return product.price > 500;
        }
    );


console.log(
    "Every Product Above 500: " +
    task3Above500
);


// Task 4 - Employee Management

let task4Employees = [

    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },

    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 50000
    },

    {
        id: 103,
        name: "Priya",
        role: "Python Developer",
        salary: 60000
    },

    {
        id: 104,
        name: "Kumar",
        role: "Tester",
        salary: 35000
    },

    {
        id: 105,
        name: "Divya",
        role: "UI Developer",
        salary: 45000
    },

    {
        id: 106,
        name: "Rahul",
        role: "Full Stack Developer",
        salary: 70000
    }
];

// Display All Employee Names

task4Employees.forEach(
    function(employee) {

        console.log(
            "Employee Name: " +
            employee.name
        );
    }
);


// Employees Above 40000

let task4Above40000 =
    task4Employees.filter(
        function(employee) {

            return employee.salary > 40000;
        }
    );


console.log(
    "Employees Above 40000:"
);

console.log(task4Above40000);


// Find Employee ID 103

let task4Employee103 =
    task4Employees.find(
        function(employee) {

            return employee.id == 103;
        }
    );


console.log("Employee ID 103:");

console.log(task4Employee103);


// Calculate Total Salary

let task4TotalSalary =
    task4Employees.reduce(
        function(total, employee) {

            return total + employee.salary;

        }, 0
    );


console.log(
    "Total Salary: " +
    task4TotalSalary
);


// Highest Paid Employee

let task4HighestPaid =
    task4Employees.reduce(
        function(highest, employee) {

            if (employee.salary > highest.salary) {

                return employee;

            } else {

                return highest;
            }
        }
    );


console.log(
    "Highest Paid Employee:"
);

console.log(task4HighestPaid);


// Sort Highest Salary to Lowest

let task4SortedEmployees =
    task4Employees
        .slice()
        .sort(
            function(a, b) {

                return b.salary - a.salary;
            }
        );


console.log(
    "Highest Salary to Lowest:"
);

console.log(task4SortedEmployees);


// New Array With Employee Names

let task4EmployeeNames =
    task4Employees.map(
        function(employee) {

            return employee.name;
        }
    );


console.log(
    "Employee Names:"
);

console.log(task4EmployeeNames);



// Task 5 - Shopping Cart


let task5Cart = [

    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },

    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },

    {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    }
];



// Function

function calculateCart(cart) {

    // Display Item Total

    cart.forEach(
        function(item) {

            let itemTotal =
                item.price *
                item.quantity;


            console.log(
                item.name +
                " Total: " +
                itemTotal
            );
        }
    );


    // Total Cart Value

    let totalCartValue =
        cart.reduce(
            function(total, item) {

                return total +
                    (
                        item.price *
                        item.quantity
                    );

            }, 0
        );


    let discount = 0;


    // 10% Discount

    if (totalCartValue > 50000) {

        discount =
            totalCartValue *
            10 / 100;
    }


    let finalAmount =
        totalCartValue -
        discount;


    console.log(
        "Total Cart Value: " +
        totalCartValue
    );

    console.log(
        "Discount: " +
        discount
    );

    console.log(
        "Final Payable Amount: " +
        finalAmount
    );
}


calculateCart(task5Cart);


// Task 6 - Student Search System


let task6Students = [

    {
        name: "Arun",
        age: 21,
        mark: 85
    },

    {
        name: "Priya",
        age: 22,
        mark: 92
    },

    {
        name: "Karthi",
        age: 20,
        mark: 67
    },

    {
        name: "Dinesh",
        age: 23,
        mark: 45
    }
];


// 1. Display All Student Names

task6Students.forEach(
    function(student) {

        console.log(
            "Student: " +
            student.name
        );
    }
);


// 2. Students Above 80

let task6Above80 =
    task6Students.filter(
        function(student) {

            return student.mark > 80;
        }
    );


console.log(
    "Students Above 80:"
);

console.log(task6Above80);


// 3. Find Priya

let task6Priya =
    task6Students.find(
        function(student) {

            return student.name == "Priya";
        }
    );


console.log("Priya:");

console.log(task6Priya);


// 4. Calculate Average Mark

let task6TotalMark =
    task6Students.reduce(
        function(total, student) {

            return total +
                student.mark;

        }, 0
    );


let task6AverageMark =
    task6TotalMark /
    task6Students.length;


console.log(
    "Average Mark: " +
    task6AverageMark
);


// 5. Check Anyone Failed

let task6AnyoneFailed =
    task6Students.some(
        function(student) {

            return student.mark < 50;
        }
    );


console.log(
    "Anyone Failed: " +
    task6AnyoneFailed
);


// 6. Everyone Above 40

let task6EveryoneAbove40 =
    task6Students.every(
        function(student) {

            return student.mark > 40;
        }
    );


console.log(
    "Everyone Above 40: " +
    task6EveryoneAbove40
);


// 7. Sort Students By Marks
// Highest to Lowest

let task6SortedStudents =
    task6Students
        .slice()
        .sort(
            function(a, b) {

                return b.mark - a.mark;
            }
        );


console.log(
    "Students Sorted By Marks:"
);

console.log(task6SortedStudents);


// Task 7 - Array Transformation Challenge


let task7Numbers = [

    12,
    5,
    8,
    21,
    44,
    7,
    30,
    15
];


// 1. Numbers Multiply By 2

let task7Double =
    task7Numbers.map(
        function(number) {

            return number * 2;
        }
    );


console.log(
    "Numbers x 2:"
);

console.log(task7Double);


// 2. Even Numbers

let task7Even =
    task7Numbers.filter(
        function(number) {

            return number % 2 == 0;
        }
    );


console.log("Even Numbers:");

console.log(task7Even);


// 3. Numbers Greater Than 15

let task7Greater15 =
    task7Numbers.filter(
        function(number) {

            return number > 15;
        }
    );


console.log(
    "Numbers Greater Than 15:"
);

console.log(task7Greater15);



// 4. First Number Greater Than 20

let task7FirstGreater20 =
    task7Numbers.find(
        function(number) {

            return number > 20;
        }
    );


console.log(
    "First Number Greater Than 20: " +
    task7FirstGreater20
);



// 5. Total Of All Numbers

let task7Total =
    task7Numbers.reduce(
        function(total, number) {

            return total + number;

        }, 0
    );


console.log(
    "Total: " +
    task7Total
);



// 6. Any Number Greater Than 40

let task7Greater40 =
    task7Numbers.some(
        function(number) {

            return number > 40;
        }
    );


console.log(
    "Any Number Greater Than 40: " +
    task7Greater40
);



// 7. Every Number Positive

let task7Positive =
    task7Numbers.every(
        function(number) {

            return number > 0;
        }
    );


console.log(
    "Every Number Positive: " +
    task7Positive
);



// 8. Sort Highest to Lowest

let task7Sorted =
    task7Numbers
        .slice()
        .sort(
            function(a, b) {

                return b - a;
            }
        );


console.log(
    "Highest to Lowest:"
);

console.log(task7Sorted);



// Task 8 - String Analyzer


let task8Sentence =
    prompt("Enter a sentence");



// Total Characters

console.log(
    "Total Characters: " +
    task8Sentence.length
);


// Uppercase

console.log(
    "Uppercase: " +
    task8Sentence.toUpperCase()
);


// Lowercase

console.log(
    "Lowercase: " +
    task8Sentence.toLowerCase()
);


// Contains JavaScript

console.log(
    "Contains JavaScript: " +
    task8Sentence.includes("JavaScript")
);


// First Character

console.log(
    "First Character: " +
    task8Sentence.slice(0, 1)
);


// Last Character

console.log(
    "Last Character: " +
    task8Sentence.slice(-1)
);


// Number Of Words

let task8Words =
    task8Sentence.split(" ");


console.log(
    "Number Of Words: " +
    task8Words.length
);


// Replace JavaScript With Python

let task8Replace =
    task8Sentence.replace(
        "JavaScript",
        "Python"
    );


console.log(
    "After Replace: " +
    task8Replace
);


// Convert Sentence Into Array

console.log(
    "Sentence Array:"
);

console.log(task8Words);


// Final Mini Project - Employee Dashboard

let dashboardEmployees = [

    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },

    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },

    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List

console.log("Employee List:");

dashboardEmployees.forEach(
    function(employee) {

        console.log(employee);
    }
);


// 2. Search Employee By Name

let dashboardSearch =
    dashboardEmployees.find(
        function(employee) {

            return employee.name == "Priya";
        }
    );


console.log(
    "Search Employee:"
);

console.log(dashboardSearch);


// 3. Department Filter

let dashboardITEmployees =
    dashboardEmployees.filter(
        function(employee) {

            return employee.department == "IT";
        }
    );


console.log(
    "IT Department Employees:"
);

console.log(dashboardITEmployees);


// 4. Salary Filter
// More Than 50000

let dashboardAbove50000 =
    dashboardEmployees.filter(
        function(employee) {

            return employee.salary > 50000;
        }
    );


console.log(
    "Employees Above 50000:"
);

console.log(dashboardAbove50000);


// 5. Total Company Salary

let dashboardTotalSalary =
    dashboardEmployees.reduce(
        function(total, employee) {

            return total +
                employee.salary;

        }, 0
    );


console.log(
    "Total Salary: " +
    dashboardTotalSalary
);


// 6. Highest Salary Employee

let dashboardHighestPaid =
    dashboardEmployees.reduce(
        function(highest, employee) {

            if (employee.salary > highest.salary) {

                return employee;

            } else {

                return highest;
            }
        }
    );


console.log(
    "Highest Paid Employee:"
);

console.log(dashboardHighestPaid);


// 7. Employees More Than 3 Years Experience

let dashboardExperience =
    dashboardEmployees.filter(
        function(employee) {

            return employee.experience > 3;
        }
    );


console.log(
    "Employees Above 3 Years Experience:"
);

console.log(dashboardExperience);


// 8. Sort Salary Low to High

let dashboardLowToHigh =
    dashboardEmployees
        .slice()
        .sort(
            function(a, b) {

                return a.salary -
                    b.salary;
            }
        );


console.log(
    "Salary Low to High:"
);

console.log(dashboardLowToHigh);


// Sort Salary High to Low

let dashboardHighToLow =
    dashboardEmployees
        .slice()
        .sort(
            function(a, b) {

                return b.salary -
                    a.salary;
            }
        );


console.log(
    "Salary High to Low:"
);

console.log(dashboardHighToLow);


// 9. Statistics

let dashboardTotalEmployees =
    dashboardEmployees.length;


let dashboardAverageSalary =
    dashboardTotalSalary /
    dashboardTotalEmployees;


console.log(
    "Total Employees: " +
    dashboardTotalEmployees
);

console.log(
    "Total Salary: ₹" +
    dashboardTotalSalary
);

console.log(
    "Highest Salary: ₹" +
    dashboardHighestPaid.salary
);

console.log(
    "Average Salary: ₹" +
    Math.round(dashboardAverageSalary)
);
