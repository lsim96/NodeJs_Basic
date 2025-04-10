import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import movieRouter from "./routes/movie.routes.js";
import userRouter from "./routes/user.routes.js";

// Load enviorment variables
dotenv.config();

const app = express();
const PORT = 3000;

//Define the type of data
app.use(express.json());

//Routes
app.use("/api/movies", movieRouter);
app.use("/api/users", userRouter);

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
    process.exit();
  }
}

startServer();
