const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        name: String,
        dateAndTime: Date,
        location: String,
        img: String,
        message: String,
        faculty: String,
        batch: String,
        organizer: String,
      }
)

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;