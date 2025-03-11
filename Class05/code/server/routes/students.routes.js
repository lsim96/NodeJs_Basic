import express from "express";
import {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudent,
} from "../services/students.service.js";

const router = express.Router();

router.get("/students", (req, res) => {
  const queryData = req.query;
  console.log(queryData);
  try {
    const students = getStudents(queryData);
    res.send(students);
  } catch (error) {
    res.sendStatus(500);
  }
});

export { router };
