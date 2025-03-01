import fs from "fs";

//Function to read existing users from users.json
try {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  console.log(parsedUsers);
} catch {
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

addUser(newUser);
