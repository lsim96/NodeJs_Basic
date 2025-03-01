import { printGreen, printRed, printYellow } from "./chalk.js";
//Chalk
function simulateServerOperations() {
  const isServerRunning = true;
  const isDataBaseConnected = false;
  const isCacheLow = true;

  if (isServerRunning) {
    printGreen("Success: Server is running on port 300");
  } else {
    printRed("Error: Server failed to load");
  }

  if (!isDataBaseConnected) {
    printRed("Error: Unable to connect to database.");
  }

  if (isCacheLow) {
    printYellow("Warnning: The cache is very low!");
  }
}

simulateServerOperations();
