import { EventEmitter } from "node:events";
import { myEmitter } from "./events.js";

const emitter = new EventEmitter();
emitter.emit("order-pizza", "small"); // wont fire an event beacause it is a completely different instance of the EventEmitter class

myEmitter.emit("anotherEvent"); //This will fire the event because we import the instance from a already declared one 
