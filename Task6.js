
// Task 1 – Digital Clock
setInterval(() => {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    console.log(`${h}:${m}:${s}`);
}, 1000);


// Task 2 – Age Calculator
let birthYear = 2003; 
let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;
console.log("Your age is " + age);


// Task 3 – Website Loading Simulation
console.log("Website Loading...");

setTimeout(() => {
    console.log("Website Loaded Successfully");
}, 3000);


// Task 4 – Automatic Notification System
let reminder = setInterval(() => {
    console.log("Take a short break");
}, 5000);

setTimeout(() => {
    clearInterval(reminder);
    console.log("Reminder Stopped");
}, 20000);


// Task 5 – Online Order Status System
console.log("Order Placed");

setTimeout(() => {
    console.log("Order Preparing");
}, 2000);

setTimeout(() => {
    console.log("Out for Delivery");
}, 5000);

setTimeout(() => {
    console.log("Order Delivered");
}, 8000);


// Task 6 – API Data Viewer
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(data => {
    console.log("All Todo Titles:");
    data.forEach(todo => {
        console.log(todo.title);
    });
});


// Task 7 – Completed Task Filter
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(data => {
    console.log("Completed Tasks:");
    let completed = data.filter(todo => todo.completed === true);

    completed.forEach(todo => {
        console.log(todo.title);
    });
});

// Task 8 – API Error Handling
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(data => {
    console.log("Data received");
})
.catch(error => {
    console.log("Server Error");
})
.finally(() => {
    console.log("Process Completed");
});


// Task 9 – Meeting Countdown Timer
let count = 10;

let timer = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(timer);
        console.log("Meeting Started");
    }
}, 1000);


// Task 10 – Login Session Timeout
console.log("User Logged In");

setTimeout(() => {
    console.log("Session Expired. Please Login Again");
}, 10000);