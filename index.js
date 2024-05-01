#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("WELCOME TO THE NUMBER GUESSING GAME");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number:"
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("CONGRATULATIONS! YOU WIN");
}
else {
    console.log(`YOU GUESSED WRONG NUMBER, YOUR RIGHT NUMBER IS: ${randomNumber}`);
}
