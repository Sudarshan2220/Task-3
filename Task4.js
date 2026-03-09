/* 1. FUNCTIONS */

function greetUser(name){
console.log("Welcome to Stackly, " + name);
}
greetUser("Sudarshan");

function calculateSalary(basic, bonus){
return basic + bonus;
}
console.log("Salary:", calculateSalary(20000,5000));

function checkEvenOdd(num){
return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));

function findMax(a,b,c){
return Math.max(a,b,c);
}
console.log("Max:", findMax(5,9,3));

function calculateGST(price){
return price + price*0.18;
}
console.log("Price with GST:", calculateGST(100));

function login(username,password){
if(username==="admin" && password==="1234"){
return "Login Successful";
}else{
return "Invalid Login";
}
}
console.log(login("admin","1234"));

/* 2. DEFAULT PARAMETERS */

function createEmployee(name,role="Trainee"){
console.log(name + " - " + role);
}
createEmployee("Rahul");

function calculateDiscount(price,discount=10){
return price - price*discount/100;
}
console.log("Discount Price:", calculateDiscount(1000));

function orderFood(item,quantity=1){
console.log(item + " x " + quantity);
}
orderFood("Burger");

/* 3. SCOPE */

let company="Stackly";

function showCompany(){
console.log("Company:",company);
}
showCompany();

if(true){
var a=10;
let b=20;
const c=30;
}
console.log(a);

function testScope(){
let x=50;
}
testScope();

/* 4. HOISTING */

console.log(testVar);
var testVar=100;

hello();
function hello(){
console.log("Hello Function Hoisting");
}

/* 5. FUNCTION TYPES */

function namedExample(){
console.log("Named Function Example");
}
namedExample();

let multiply=function(a,b){
return a*b;
}
console.log("Multiply:",multiply(3,4));

let square=num=>num*num;
console.log("Square:",square(5));

/* 6. CALLBACK FUNCTIONS */

function processData(callback){
callback();
}

processData(function(){
console.log("Processing Done");
});

function calculate(a,b,operation){
return operation(a,b);
}

function add(x,y){
return x+y;
}

console.log("Add:",calculate(5,3,add));

function completed(){
console.log("Task Completed");
}
completed();

function userData(callback){
callback("Sudarshan");
}

userData(function(name){
console.log("User:",name);
});

/* 7. CURRYING */

function addThree(a){
return function(b){
return function(c){
return a+b+c;
}
}
}

console.log("Curried Sum:",addThree(1)(2)(3));

function multiplyThree(a){
return function(b){
return function(c){
return a*b*c;
}
}
}

console.log("Curried Multiply:",multiplyThree(2)(3)(4));

/* 8. IIFE */

(function(){
console.log("Website Loaded");
})();

(function(price){
let discount=price*0.1;
console.log("Discount Price:",price-discount);
})(1000);

/* 9. GENERATORS */

function* coupons(){
yield "DISC10";
yield "DISC20";
yield "DISC30";
}

let c=coupons();
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);

function* motivation(){
yield "Keep Coding";
yield "Practice Daily";
yield "Never Give Up";
}

/* 10. SPREAD OPERATOR */

let arr1=[1,2,3];
let arr2=[4,5,6];

let merged=[...arr1,...arr2];
console.log("Merged:",merged);

let clone=[...arr1];
console.log("Clone:",clone);

let obj1={name:"John"};
let obj2={role:"Developer"};

let mergedObj={...obj1,...obj2};
console.log("Object:",mergedObj);

/* 11. REST OPERATOR */

function sumAll(...numbers){
return numbers.reduce((a,b)=>a+b);
}

console.log("Sum:",sumAll(1,2,3,4));

function show(first,...rest){
console.log("First:",first);
console.log("Rest:",rest);
}

show(1,2,3,4);

function totalBill(...prices){
return prices.reduce((a,b)=>a+b);
}

console.log("Bill:",totalBill(100,200,300));

/* 12. DESTRUCTURING */

let [d1,d2,d3,d4]=[10,20,30,40];
console.log(d1,d2,d3,d4);

let {name,role,salary}={
name:"Naveen",
role:"Developer",
salary:40000
};

console.log(name,role,salary);

let nums=[1,2,3,4,5];
let [first,,,,last]=nums;

console.log("First:",first,"Last:",last);

let [x,y,[z,w]]=[1,2,[3,4]];
console.log(z,w);

/* 13. ARRAY MANIPULATION */

let arr=[1,2,3,4,5];

arr.push(6);
arr.pop();
arr.shift();
arr.unshift(0);

console.log("Array:",arr);

let arrReplace=[1,2,3,40,50,6];
arrReplace.splice(3,2,4,5);

console.log("Splice:",arrReplace);
