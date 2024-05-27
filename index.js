#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "Operator", choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power", "percentage"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else if (answer.Operator === "Power") {
    console.log(answer.FirstNumber ** answer.SecondNumber);
}
else if (answer.Operator === "percentage") {
    console.log(answer.FirstNumber * answer.SecondNumber / 100);
}
else {
    console.log("Please select valid operators");
}
