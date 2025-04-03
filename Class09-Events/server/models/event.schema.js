import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  artist: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: [true, "artist details are required"],
  },
  location: {
    type: String,
    required: [true, "location is required"],
  },
  date: {
    type: Date,
    required: [true, "date needs to be provided"],
  },
  ticketPrice: {
    type: Number,
    min: 5,
    max: 300,
    required: [true, "price details need to be provided"],
  },
});

const Event = model("event", eventSchema, "events");

export default Event;
