#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random());
console.log("Welcome to Number Guessing Game ")

const answer = await inquirer.prompt([{
    name :  "User.GuessedNumber",
    type : "Number",
    message: "please guess a Number between 1-10: ",
}]);

if (answer.User.GuessedNumber === randomNumber ){
    console.log("Congratulation you enter a correct No")
   }
     else {console.log("You Guessed a wrong number");
     }

    
