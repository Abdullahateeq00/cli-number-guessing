#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk  from "chalk";

// console.log(chalk.bgGreen.bold('Welcome') + ' ' + chalk.red.bgGreen.bold('to') + ' ' + chalk.blue.bgGreen.bold('number') + ' ' + chalk.red.bgGreen.bold('guessing') + ' ' + chalk.blue.bgGreen.bold('game'));

function rainbowText(text: string): string {
    const rainbowColors = [chalk.red, chalk.yellow, chalk.green, chalk.blue, chalk.magenta];
    let rainbowText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        rainbowText += color(text[i]);
    }
    return rainbowText;
}

console.log(rainbowText('Welcome to number guessing game'));
const randomNumber = (chalk.yellow.bold(Math.floor(Math.random() * 10 + 1)));

const answers =  await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.italic.bold("Please Guess a Number:"),
    }
]);
if(answers.userGuessedNumber === randomNumber) {
    console.log(chalk.yellow.italic.bold("Congratulations! You win"))
    
}else {
    console.log(chalk.red.italic.bold(`You guessed wrong number, Your right number is: ${randomNumber}`));
}