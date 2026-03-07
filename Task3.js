
//Section 1

//Number greater than 10
let num1 = 15;

if (num1 > 10) {
    console.log("Number is big");
}

//Check voting eligibility
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//Temperature check
let temperature = 35;

if (temperature > 30) {
    console.log("Hot");
} else {
    console.log("Cool");
}

//Positive or Negative number
let number = -5;

if (number >= 0) {
    console.log("Positive number");
} else {
    console.log("Negative number");
}

//Even or Odd number
let num2 = 8;

if (num2 % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

//Section 2

//1. Grade based on marks
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

//2. Message based on hour
let hour = 16;

if (hour < 12) {
    console.log("Morning");
} else if (hour < 17) {
    console.log("Afternoon");
} else if (hour < 21) {
    console.log("Evening");
} else {
    console.log("Night");
}

//3. Check number (0, positive, negative)
let num = -5;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Number is Zero");
}

//4. Score result
let score = 75;

if (score >= 100) {
    console.log("Winner");
} else if (score >= 50) {
    console.log("Good");
} else {
    console.log("Try again");
}

//5. Largest among 3 numbers
let x = 10;
let y = 25;
let z = 15;

if (x >= y && x >= z) {
    console.log("x is largest");
} else if (y >= x && y >= z) {
    console.log("y is largest");
} else {
    console.log("z is largest");
}

//Section 3

//1. Print day name
let day = 1;

switch(day){
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

//2. Traffic Light
let trafficLight = "Red";

switch(trafficLight){
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Ready");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}

//3. Month → Season
let month = 12;

switch(month){
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;

    case 6:
    case 7:
    case 8:
    case 9:
        console.log("Rainy");
        break;

    case 10:
    case 11:
        console.log("Autumn");
        break;

    default:
        console.log("Invalid month");
}

//4. Role message
let role = "Admin";

switch(role){
    case "Admin":
        console.log("Full access");
        break;
    case "User":
        console.log("Limited access");
        break;
    case "Guest":
        console.log("View only access");
        break;
    default:
        console.log("Unknown role");
}


//5. Grade performance
let grade = "A";

switch(grade){
    case "A":
        console.log("Excellent performance");
        break;
    case "B":
        console.log("Good performance");
        break;
    case "C":
        console.log("Average performance");
        break;
    case "D":
        console.log("Needs improvement");
        break;
    default:
        console.log("Invalid grade");
}

// SECTION 4 

// 1 Print numbers 1 to 10
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// 2 Print numbers 10 to 1
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// 3 Print even numbers from 1 to 20
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// 4 Print odd numbers from 1 to 20
for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// 5 Multiplication table of 5
for(let i = 1; i <= 10; i++){
    console.log("5 x " + i + " = " + (5*i));
}



//SECTION 5

// 1 Print numbers 1 to 5
let a = 1;
while(a <= 5){
    console.log(a);
    a++;
}

// 2 Print numbers 5 to 1
let b = 5;
while(b >= 1){
    console.log(b);
    b--;
}

// 3 Print even numbers from 1 to 10
let c = 1;
while(c <= 10){
    if(c % 2 === 0){
        console.log(c);
    }
    c++;
}

// 4 Sum of numbers from 1 to 10
let i = 1;
let sum = 0;
while(i <= 10){
    sum = sum + i;
    i++;
}
console.log("Sum:", sum);

// 5 Square of numbers 1 to 5
let d = 1;
while(d <= 5){
    console.log(d*d);
    d++;
}



//SECTION 6

// 1 Print numbers 1 to 5
let e = 1;
do{
    console.log(e);
    e++;
}while(e <= 5);

// 2 Print numbers 5 to 1
let f = 5;
do{
    console.log(f);
    f--;
}while(f >= 1);

// 3 Multiples of 3 up to 30
let g = 3;
do{
    console.log(g);
    g = g + 3;
}while(g <= 30);

// 4 Numbers divisible by 4 from 1 to 20
let h = 1;
do{
    if(h % 4 === 0){
        console.log(h);
    }
    h++;
}while(h <= 20);

// 5 Print numbers until value reaches 10
let j = 1;
do{
    console.log(j);
    j++;
}while(j <= 10);



//SECTION 7

// 1 Print each character
let str = "javascript";
for(let ch of str){
    console.log(ch);
}

// 2 Print each fruit
let fruits = ["apple","banana","orange"];
for(let fruit of fruits){
    console.log(fruit);
}

// 3 Count characters in string
let count = 0;
for(let ch of str){
    count++;
}
console.log("Character count:", count);

// 4 Print vowels from string
let text = "javascript";
for(let ch of text){
    if("aeiou".includes(ch)){
        console.log(ch);
    }
}

// 5 Sum of array numbers
let numbers = [10,20,30];
let total = 0;
for(let num of numbers){
    total = total + num;
}
console.log("Sum:", total);



//SECTION 8 
let student = {
    name: "Sudarshan",
    age: 22,
    department: "BSc"
};

// 1 Print all values
for(let key in student){
    console.log(student[key]);
}

// 2 Print all keys
for(let key in student){
    console.log(key);
}

// 3 Print key and value
for(let key in student){
    console.log(key + " : " + student[key]);
}



//SECTION 9 
// 1 Addition function
function add(a,b){
    return a + b;
}
console.log(add(10,5));

// 2 Square function
function square(num){
    return num * num;
}
console.log(square(6));