const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  sign: {
    type: String,
  },
  timeElapsed: {
    type: Number,
  },
  participantCode: {
    type: Number,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  signCode: {
    type: Number,
  },
});

module.exports = Activity = mongoose.model("Activity", ActivitySchema);
