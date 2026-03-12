
// Employee Salary Analysis System

let employees = [
 {name:"Ravi", salary:25000},
 {name:"Meena", salary:60000},
 {name:"Arun", salary:45000},
 {name:"Priya", salary:80000},
 {name:"John", salary:30000}
];

// Employees whose salary > 40000
let highSalary = employees.filter(emp => emp.salary > 40000);
console.log("Salary > 40000:", highSalary);

// First employee salary > 70000
let firstHigh = employees.find(emp => emp.salary > 70000);
console.log("First salary > 70000:", firstHigh);

// Total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary:", totalSalary);

// Any salary < 20000
let below20k = employees.some(emp => emp.salary < 20000);
console.log("Any salary < 20000:", below20k);

// All salary > 20000
let allAbove20k = employees.every(emp => emp.salary > 20000);
console.log("All salary > 20000:", allAbove20k);



//  E-commerce Product Search

let products = ["laptop","mobile","tablet","smartwatch","mobile"];

console.log("Tablet exists:", products.includes("tablet"));

console.log("First index of mobile:", products.indexOf("mobile"));

console.log("Last index of mobile:", products.lastIndexOf("mobile"));

console.log("Camera exists:", products.includes("camera"));


// Website Username Formatter

let username = "   naveenkumar   ";

let cleanName = username.trim();
console.log("Trim:", cleanName);

console.log("Uppercase:", cleanName.toUpperCase());

console.log("Lowercase:", cleanName.toLowerCase());

console.log("First 6 characters:", cleanName.slice(0,6));


//  Game Platform Data Processing

let games = ["cricket","football","hockey","tennis"];

// forEach
games.forEach(game => {
 console.log("Game:", game);
});

// map
let gameList = games.map(game => "Game : " + game);
console.log("Mapped Array:", gameList);


// Student Marks Analyzer

let marks = [45,90,23,67,88,12];

// Ascending
let asc = [...marks].sort((a,b)=>a-b);
console.log("Ascending:", asc);

// Descending
let desc = [...marks].sort((a,b)=>b-a);
console.log("Descending:", desc);

// Reverse
let rev = [...marks].reverse();
console.log("Reverse:", rev);


//  Salary Report Generator

let salaries = [10000,20000,30000,40000];

// Total salary
let total = salaries.reduce((sum,val)=>sum+val,0);
console.log("Total Salary:", total);

// Average salary
let avg = total / salaries.length;
console.log("Average Salary:", avg);


//  URL Processor

let url = "www-stackly-com";

let urlArray = url.split("-");
console.log("URL Array:", urlArray);


//  Job Role Modifier

let role = "python developer";

console.log("Replace:", role.replace("python","javascript"));

console.log("Starts with python:", role.startsWith("python"));

console.log("Ends with developer:", role.endsWith("developer"));


//  Nested Array Data Cleanup

let data = [1,2,[3,4,[5,6]]];

let flatArray = data.flat(2);
console.log("Flattened:", flatArray);


//  Sports Data Slice

let sports = ["cricket","football","tennis","hockey","golf"];

// football & tennis
console.log("Football & Tennis:", sports.slice(1,3));

// First 3 sports
console.log("First 3 Sports:", sports.slice(0,3));