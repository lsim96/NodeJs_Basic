import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);

const studentsPath = path.join(projectPath, "..", "data", "students.json");

//1. Get students data
const getStudents = (queryData) => {
  const students = JSON.parse(
    fs.readFileSync(studentsPath, { encoding: "utf-8" })
  );
  let updatedStudents = [...students];
  if (queryData?.gender) {
    updatedStudents = updatedStudents.filter(
      (student) => student.gender === queryData.gender
    );
  }

  if (queryData?.country) {
    updatedStudents = updatedStudents.filter(
      (student) => student.country === queryData.country
    );
  }

  if (updatedStudents.length <= 0) throw new Error("No students found");
  return updatedStudents;
};

//2. Save students data
const saveStudentsData = (students) => {
  fs.writeFileSync(studentsPath, JSON.stringify(students, 0, 2));
};

//3. Add student
const addStudent = (newStudentData) => {
  const students = getStudents();

  const newStudent = {
    id: uuidv4(),
    //firstName: newStudentData.firstName same as the below
    ...newStudentData,
  };

  const updateStudents = [...students, newStudent];
  //   students.push(newStudent); same as the above
  saveStudentsData(updateStudents);
  return newStudent;
};

//4 Get student by id
const getStudentById = (studentId) => {
  const students = getStudents();
  const foundStudent = students.find((student) => student.id === studentId);
  if (!foundStudent) throw new Error("Student not found!");
  return foundStudent;
};

//5. Delete student by Id
const deleteStudent = (studentId) => {
  const students = getStudents();
  const updatedStudents = students.filter(
    (student) => student.id !== studentId
  );
  if (students.length === updatedStudents.length) {
    throw new Error("Student to delete not found");
  }
  saveStudentsData(updatedStudents);
};

//6. Update student by Id
const updateStudent = (studentId, studentUpdateData) => {
  const students = getStudents();
  const foundStudentIndex = students.findIndex(
    (student) => student.id === studentId
  );
  console.log(foundStudentIndex);

  //if student is not found
  if (foundStudentIndex < 0) throw new Error("Student not found");
  //if (!foundStudent) can be used

  const updatedStudentData = {
    ...students[foundStudentIndex],
    ...studentUpdateData,
  };

  students[foundStudentIndex] = updatedStudentData;
  saveStudentsData(students);
  return updatedStudentData;
};

export {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudent,
  updateStudent,
};
