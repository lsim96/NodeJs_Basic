import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { router as studentsRouter } from "./routes/students.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(express.json());

app.use(
  cors()
  // {methods: ["GET", "POST"]}
);

app.get("/", (req, res) => {
  res.send("YO!"); // string as a response
});

app.get("/something", (req, res) => {
  //   res.send("YO!");
  res.json({ message: "Some text!" }); //json as a response
});

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);

const staticHomePagePath = path.join(projectPath, "homePage");
const staticAboutPagePath = path.join(projectPath, "aboutPage");

app.use("/home", express.static(staticHomePagePath));
app.use("/about", express.static(staticAboutPagePath));

app.use("/api", studentsRouter);

app.listen(PORT, HOST, () => {
  console.log(`App listening on port ${PORT}`);
});
