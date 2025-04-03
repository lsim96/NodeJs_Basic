import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import eventRouter from "./routes/event.routes.js";

// Load enviorment variables
dotenv.config();

const app = express();
const PORT = 3000;

//Define the type of data
app.use(express.json());

app.use(
  cors({
    origin: "*", //allow all origins
    methods: ["GET", "PUT", "DELETE", "OPTIONS"],
  })
);

//Routes
app.use("/api/events", eventRouter);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

//Connect to mongoDB and start server
async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
