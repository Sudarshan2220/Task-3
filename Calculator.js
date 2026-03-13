console.log("===== Console Calculator =====");

let choice = prompt(
`Select Operation:
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Power (^)
6. Square Root
7. Percentage`
);

let num1, num2, result;

switch(choice) {

    case "1":
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number:"));
        result = num1 + num2;
        console.log("Result:", result);
        break;

    case "2":
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number:"));
        result = num1 - num2;
        console.log("Result:", result);
        break;

    case "3":
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number:"));
        result = num1 * num2;
        console.log("Result:", result);
        break;

    case "4":
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number:"));
        if(num2 === 0){
            console.log("Cannot divide by zero");
        } else {
            result = num1 / num2;
            console.log("Result:", result);
        }
        break;

    case "5":
        num1 = Number(prompt("Enter number:"));
        num2 = Number(prompt("Enter power:"));
        result = num1 ** num2;
        console.log("Result:", result);
        break;

    case "6":
        num1 = Number(prompt("Enter number:"));
        result = Math.sqrt(num1);
        console.log("Square Root:", result);
        break;

    case "7":
        num1 = Number(prompt("Enter total value:"));
        num2 = Number(prompt("Enter percentage:"));
        result = (num1 * num2) / 100;
        console.log("Percentage:", result);
        break;

    default:
        console.log("Invalid choice");
}