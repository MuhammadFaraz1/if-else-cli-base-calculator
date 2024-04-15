#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let num1=await inquirer.prompt([{
    name:"num",
    type:"number",
    message:chalk.yellowBright("Please, Enter your first number:")
}])
let num2=await inquirer.prompt([{
    name:"num",
    type:"number",
    message:chalk.yellowBright("Please, Enter your second number:")
}])
let operator=await inquirer.prompt([{
    name:"num",
    type:"list",
    message:chalk.yellowBright("Please, Enter the operator do you want to perform operation:"),
    choices:["+","-","*","/","**","%"]
}])

let ans=`${num1.num} ${operator.num} ${num2.num}`;
// console.log(ans)
if(operator.num=== "+"){
    console.log(chalk.greenBright(`${ans} = ${num1.num+num2.num}`))
}else if(operator.num=== "-"){
    console.log(chalk.greenBright(` ${ans} = ${num1.num-num2.num}`))
}else if(operator.num=== "*"){
    console.log(chalk.greenBright(` ${ans} = ${num1.num*num2.num}`))
}else if(operator.num=== "/"){
    console.log(chalk.greenBright(` ${ans} = ${num1.num/num2.num}`))
}else if(operator.num=== "**"){
    console.log(chalk.greenBright(` ${ans} = ${num1.num**num2.num}`))
}else{
    console.log(chalk.greenBright(` ${ans} = ${num1.num%num2.num}`))
}