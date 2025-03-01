const myName = "Leonid";
console.log(`Hello my name is ${myName}. This is my first nodejs app.`);

// console.log("GLOBAL", global);

//console.log(window); will throw an error, since it doesn't exist in nodejs
// console.log("PROCESS", process);

const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

// setTimeout(() => {
//   console.log("Delayed for 1 second");
// // }, 1000);

sayHello("Leon");
sayHello("BoB");

//Exits the server
// process.exit();

process.stdout.write("Enter something: ");
process.stdin.on("data", (input) => {
  const userInput = input.toString().trim();
  console.log(`You entered: ${userInput}`);
});
