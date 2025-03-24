import { Schema, model } from "mongoose";
import { genres } from "../util/constants.js";

const directorSchema = new Schema({
  firstName: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: [true, "first name is required"],
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: [true, "last name is required"],
  },
  birthYear: {
    type: Number,
    required: [true, "birthYear is required"],
  },
});

const Director = model("director", directorSchema, "directors");

export default Director;
