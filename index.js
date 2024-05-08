#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
function rainbowText(text) {
    const rainbowColors = [chalk.red, chalk.yellow, chalk.green, chalk.blue, chalk.magenta];
    let rainbowText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        rainbowText += color(text[i]);
    }
    return rainbowText;
}
console.log(rainbowText('Welcome to number guessing game'));
const randomNumber = (Math.floor(Math.random() * 4 + 1));
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.italic("Please Guess a Number:"),
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.yellow("Congratulations! You win"));
}
else {
    console.log(chalk.red("You guessed wrong number " + ",", "your right number is: " +
        chalk.yellow(`${randomNumber}`)));
}
