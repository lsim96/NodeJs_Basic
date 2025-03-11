import { promises as fsPromises } from "fs";

// Define the log file path
const LOG_FILE_PATH = "app.txt";

//Function to log messages with timestamps
const logMessage = async (message) => {
  const timeStamp = new Date().toISOString();
  const logEntry = `[${timeStamp} ${message}]`;

  try {
    await fsPromises.appendFile(LOG_FILE_PATH, logEntry);
  } catch (err) {
    console.log("Failed to write log:", err);
  }
};

export { logMessage };
