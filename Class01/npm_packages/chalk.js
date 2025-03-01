import chalk from "chalk";

// console.log(chalk.blue("This text is blue"));
// console.log(chalk.green.underline("This text is udnerlined in green"));

//Functions to be exported and used in idnex.js
export function printGreen(text) {
  console.log(chalk.green(text));
}

export function printYellow(text) {
  console.log(chalk.yellow(text));
}
export function printRed(text) {
  console.log(chalk.red(text));
}
