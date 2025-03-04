import fs from "fs";

//Function to read existing users from users.json
try {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  console.log(parsedUsers);
} catch (error) {
  console.error("Error reading file", error);
}

const getUsersById = (userId) => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  const foundUser = parsedUsers.find((user) => user.id === userId); // if we use filter here, we will receive it in a array
  if (!foundUser) {
    return foundUser;
  }
  return null;

  //   return foundUser ? foundUser : {};
  //return foundUser ?? {} => nullish coalescing operator
};

const foundUser = getUsersById(1);
console.log(foundUser);

const addUser = (user) => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  const newUserId = parsedUsers.length + 1;
  const newUser = {
    id: newUserId,
    name: user.name,
    username: user.username,
    email: user.email,
  };
  parsedUsers.push(newUser);
  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
};

const newUser = {
  name: "Bob",
  username: "bobbobsky",
  email: "bob@email.com",
};

// addUser(newUser);

const editUser = (id, data) => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  const user = parsedUsers.find((user) => user.id === id);
  user.name = data.name;
  user.username = data.username;
  user.email = data.email;

  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
};

const updatedUser = {
  name: "Leon Simonoski",
  username: "leonsim",
  email: "leonsimonoski@gmail.com",
};

// editUser(9, updatedUser);

const deleteUser = (id) => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  const removedUser = parsedUsers.filter((user) => user.id !== id);

  fs.writeFileSync("users.json", JSON.stringify(removedUser), null, 2);
};

// deleteUser(9);

const deleteAll = () => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  parsedUsers.length = 0;
  // parsedUsers.splice(0, parsedUsers.length);
  // Trying different ways ovah here!!

  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);

  // fs.writeFileSync("users.json", "", null, 2);
  // Here as well!
};

deleteAll();
