import path from "path";
import { fileURLToPath } from "url";
import { readNotes, readNoteById, createNote } from "./notesService.js";
import { timeStamp } from "console";

const notesFilePath = ".\\data\\notes.json"; // must escape the backslash

//Creating path via path module
const currentFileUrl = import.meta.url;
const projectPath = fileURLToPath(currentFileUrl);
const notesPath = path.join(projectPath, "data", "notes.json");

const noteToAdd = {
  title: "Coding Notes",
  content: "Learn NodeJs AND filesystem",
  timeStamp: "2025-03-05T18:34:00Z",
};

const notes = await readNoteById(notesPath, 3);
console.log(notes);

const addedNote = await createNote(notesFilePath, noteToAdd);
console.log(addedNote);
