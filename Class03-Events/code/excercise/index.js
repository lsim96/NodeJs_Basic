import { EventEmitter } from "node:events";
import * as fs from "fs";

const emitter = new EventEmitter();

const eventTypes = {
  logIn: "You have successfully logged in",
  logOut: "You have successfully logged out",
  error: "Wrong password",
};

emitter.on(eventTypes.logIn, () => {
  console.log("You have logged in");
});

emitter.on(eventTypes.logOut, () => {
  console.log("You have logged out");
});

emitter.on(eventTypes.error, () => {
  console.log("You have typed in a wrong password!");
});

try {
  emitter.emit(eventTypes.logIn);
  fs.appendFileSync("text.txt", eventTypes.logIn);
} catch (error) {
  console.error(error.message);
}

try {
  emitter.emit(eventTypes.logOut);
  fs.appendFileSync("text.txt", `\n ${eventTypes.logOut}`);
} catch (error) {
  console.error(error.message);
}

try {
  emitter.emit(eventTypes.error);
  fs.appendFileSync("text.txt", `\n ${eventTypes.error}`);
} catch (error) {
  console.error(error.message);
}
