const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    statue: { type: String, default: "Planned" },
    date: { type: Date, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Session", sessionSchema);
