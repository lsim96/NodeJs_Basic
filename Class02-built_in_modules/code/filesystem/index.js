//Importing build-in Node.js modules
import path from "path"; //Handles file and directoyry paths
import fs from "fs"; // Provides file system operations (read/write file, directories, etc)
import os from "os"; //Retrieves operating system info
import querystring from "querystring"; // Retrieves data from api query paramenters
import { fileURLToPath } from "url";

// importing NPM packages
import { v4 as uuidv4 } from "uuid";
import { clearScreenDown } from "readline";

//Get __filename and __dirname equivalents for ES modules

//Current file path
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

//Current directory path
const __dirname = path.dirname(__filename);
console.log(__dirname);

//File extension
const fileExtension = path.extname(__filename);
console.log("File extension", fileExtension);

//File name
const fileName = path.basename(__filename);
console.log("File Name", fileName);

//directory name
const currentDir = path.basename(path.dirname(__filename));
console.log("Current filename", currentDir);

//Working with file system
//Define directory path
const dirPath = path.join(__dirname, "test-folder");
console.log(dirPath);
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath); //Creates a new directory synchronously
  console.log("Directory successfully created");
} else {
  console.log("Folder already exists");
}

//Define a file path inside the newely created folder
const filePath = path.join(dirPath, "hello.txt");

//Write text content to file
fs.writeFileSync(filePath, "Hello, this text has been written via js code!");

//Read file content synchronously
const content = fs.readFileSync(filePath, "utf-8"); //Reads tghe content of the file
console.log(content);

//List all content in the current directory
const files = fs.readdirSync(__dirname);
console.log(files);

//OS module
const platform = os.platform();
console.log(platform);

const architecture = os.arch();
console.log(architecture);

const cpuCores1 = os.cpus();
console.log(cpuCores1);

const cpuCores = os.cpus().length;
console.log(cpuCores);

const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
console.log(totalMemory);

const userHomeDirectory = os.homedir();
console.log(userHomeDirectory);

//UUID module
const uniqueId = uuidv4();
console.log(uniqueId);

//Querystrng module

const qryStrng =
  "sort=price&order=desc&page=2&&category=electronics&brand=Apple";
const parsedValues = querystring.parse(qryStrng);
console.log(parsedValues);

const sort = parsedValues.sort;
console.log(sort);

const normalObject = { ...parsedValues };
console.log(normalObject);
