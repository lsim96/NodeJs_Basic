import { Schema, model } from "mongoose";
import { userRoles } from "../util/constants.js";

const userSchema = new Schema({
  email: {
    type: String,
    minLength: 5,
    maxLength: 50,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    minLength: 5,
    required: [true, "password is required"],
  },
  role: {
    type: [String],
    enum: userRoles,
    minLength: 3,
    required: [true, "password is required"],
  },
});

const User = model("user", userSchema, "users");

export default User;
