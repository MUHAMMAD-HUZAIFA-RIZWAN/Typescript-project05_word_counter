#!/usr/bin/env node
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js"
import chalk from "chalk";
import figlet from "figlet";
figlet.defaults({fontPath: "assets/fonts"});

function ready(){
  console.log (chalk.bgBlueBright(figlet.textSync("WELCOME !!!")));
  
}

ready();


let answer :{sentence:string} = await inquirer.prompt([
    {
       type: "input ",
       name:'sentence',
       message: (chalk.bgGreenBright("Enter the required sentence"))

    }
])
let count = answer.sentence.trim().split(' ');
console.log (chalk.bgRedBright(`The list of words present in the entered sentence are ${count}`));

console.log (chalk.bgBlueBright(`The number of words in the entered sentence are ${count.length}`));
