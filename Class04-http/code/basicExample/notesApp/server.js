import http from "node:http";
import { v4 as uuid } from "uuid";
import loggerEmitter from "./loggerService.js";
import { writeData, readData } from "./fileService.js";

const HOST = "http://localhost";
const PORT = 3002;

const server = http.createServer((request, response) => {
  const { url, method } = request;
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PUT, PATCH, OPTIONS"
  );
  response.setHeader("Access-Control-Max-Age", 2592000);

  response.setHeader("Content-Type", "application/json");

  if (method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  if (!url.startsWith("/notes")) {
    response.statusCode = 400;
    response.end(JSON.stringify({ error: "Bad request: Invalid Route" }));
    return;
  }

  if (method === "GET") {
    try {
      const notes = JSON.parse(readData("db.json"));
      response.end(JSON.stringify(notes));
      loggerEmitter.emit("log", "The user requested all notes.");
    } catch (error) {
      response.statusCode = 500;
      response.end(JSON.stringify({ error: "Could not read notes." }));
    }
  }
  if (method === "POST") {
    let body = [];
    request.on("data", (chunk) => body.push(chunk));

    request.on("end", () => {
      try {
        const parsedBody = JSON.parse(Buffer.concat(body).toString());
        const newNote = { ...parsedBody, id: uuid() };

        let notes = JSON.parse(readData("db.json"));
        notes.push(newNote);
        // null value is the replacer parameter. If set to null, no filtering or transformations are applied (it keeps all properties).
        // 2 is the space parameter, which specifies the number of spaces used for indentation in the output JSON string. It improves readability by formatting the output with line breaks and indents.
        writeData("db.json", JSON.stringify(notes, null, 2));

        loggerEmitter.emit("log", `User created note: ${newNote.title}`);

        response.end(JSON.stringify({ message: "Note added", note: newNote }));
      } catch (error) {
        response.statusCode = 500;
        response.end(JSON.stringify({ error: "Error saving note" }));
      }
    });
    return;
  }

  if (method === "PUT") {
    const id = url.split("/").pop();
    let body = [];
    request.on("data", (chunk) => body.push(chunk));

    request.on("end", () => {
      try {
        const parsedBody = JSON.parse(Buffer.concat(body).toString());
        let notes = JSON.parse(readData("db.json"));
        const index = notes.findIndex((note) => note.id === id);

        if (index === -1) {
          response.statusCode = 404;
          response.end(JSON.stringify({ error: "Note not found" }));
          return;
        }

        notes[index] = { ...parsedBody, id };
        writeData("db.json", JSON.stringify(notes, null, 2));

        loggerEmitter.emit("log", `User updated note: ${notes[index].title}`);

        response.end(
          JSON.stringify({ message: "Note updated", note: notes[index] })
        );
      } catch (error) {
        response.statusCode = 500;
        response.end(JSON.stringify({ error: "Error updating note" }));
      }
    });
    return;
  }

  if (method === "DELETE") {
    const id = url.split("/").pop();
    try {
      let notes = JSON.parse(readData("db.json"));
      const filteredNotes = notes.filter((note) => note.id !== id);

      if (filteredNotes.length === notes.length) {
        response.statusCode = 404;
        response.end(JSON.stringify({ error: "Note not found" }));
        return;
      }

      writeData("db.json", JSON.stringify(filteredNotes, null, 2));
      loggerEmitter.emit("log", `User deleted note with ID: ${id}`);

      response.end(JSON.stringify({ message: "Note deleted" }));
    } catch (error) {
      response.statusCode = 500;
      response.end(JSON.stringify({ error: "Error deleting note" }));
    }
    return;
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
