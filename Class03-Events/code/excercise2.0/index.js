import { EventEmitter } from "node:events";
import * as fs from "fs";

const myEmitter = new EventEmitter();

myEmitter.on("my-event", () => {
  const message = "Event was triggered!\n";

  fs.appendFile("log.txt", message, (err) => {
    if (err) {
      console.log("Error writing to file", err.message);
    } else {
      console.log("Log written to file!");
    }
  });
});

myEmitter.emit("my-event");
myEmitter.emit("my-event");
myEmitter.emit("my-event");
