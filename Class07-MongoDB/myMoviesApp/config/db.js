import { MongoClient, MongoParseError } from "mongodb";
import dotenv from "dotenv";

//Load enviorment variables
dotenv.config();
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DATABASE } =
  process.env;

//Validating required enviorment variables
const requiredEnvVaribles = [
  "MONGO_USERNAME",
  "MONGO_PASSWORD",
  "MONGO_CLUSTER",
  "MONGO_DATABASE",
];

const missingEnvVars = requiredEnvVaribles.filter(
  (envVar) => !process.env[envVar]
);

if (missingEnvVars.length > 0) {
  console.error(
    "Missing required enviorement variables: ",
    missingEnvVars.join(",")
  );
  process.exit();
}

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`;

const client = new MongoClient(MONGO_URI);

//a VARIABLE DB IS INITIALIZED AS NULL TO LATER HOLD THE DATABSE CONNECTION
let db = null;

export async function connectDB() {
  try {
    //connect to mongodb using client.connect()
    const connection = await client.connect();
    //Retrive the databse instance with connection.db() and assign it to db
    db = connection.db();
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDb connection error:", error);
    process.exit();
  }
}

//Returns the current db instacne. If db is not yet initialized, it logs an error
export function getDB() {
  if (!db) {
    console.error("Database not initialized:", error);
  }
  return db;
}
