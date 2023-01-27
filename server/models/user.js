const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  points: [(type = Number)],
  weeklyGoal: { type: Number },
});

module.exports = mongoose.model("User", userSchema);
