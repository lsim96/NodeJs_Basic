import { EventEmitter } from "node:events";
const emitter = new EventEmitter();

//Create a custom class that inherits from EventEmitter
class MyEmmiter extends EventEmitter {}

export const myEmitter = new MyEmmiter();

//REGISTER EVENT
// emitter.on("order-pizza", function (size) {
//   console.log("From regular function");
//   console.log(`Order received, making a ${size} pizza`);
// });

// emitter.on("order-pizza-arrow", (size) => {
//   console.log("From arrow function");
//   console.log(`Order received, making a ${size} pizza`);
// });

//FIRE (TRIGGER) EVENT
emitter.emit("order-pizza", "large");
emitter.emit("order-pizza-arrow", "medium");

const function1 = () => {
  console.log("Message from function 1");
};

const function2 = () => {
  console.log("Message from function 2");
};

const function3 = () => {
  console.log("Message from function 3");
};

const function4 = () => {
  console.log("Message from function 4");
};

const function5 = () => {
  console.log("Message from function 5");
};

const function6 = () => {
  console.log("Message from function 6");
};

//Add event listeners to existing event
emitter.on("myEvent", function1); // we dont call the function with function(). because that way the function will execute byitself, not when the event is interacted with
emitter.on("myEvent", function2); // how many times we call an event, it executes for that many times
emitter.on("myEvent", function2);

//same as emitter.on()
emitter.addListener("myEvent", function3);

//Attach a one=time listener using once
emitter.once("myEvent", function4);

//Attach a listener that will be executed before all listeners
emitter.prependListener("myEvent", function5);

//Attach a prepended one-time listener that will be executed only once, no matter how many times emitter.emit("myEvent") is called
emitter.prependOnceListener("myEvent", function6);

//List all listeners for "myEvent"
// console.log(emitter.listeners("myEvent"));
//List total number of listeners for "myEvent"
// console.log(emitter.listenerCount("myEvent"));

emitter.emit("myEvent");
console.log("+++++++++++++++++++");
emitter.emit("myEvent");
//Remove one listener
// emitter.removeListener("myEvent", function2); //If there are multiple listeners from the same handler function, the removeListener should be called as many times to delete as many time the event was called

myEmitter.on("anotherEvent", () => {
  console.log("Event emitted from myEmitter");
});

// myEmitter.emit("anotherEvent");
//Remove all listeners
// emitter.removeAllListeners("myEvent");
