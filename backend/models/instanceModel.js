const mongoose = require("mongoose");

const instanceSchema = new mongoose.Schema({
  instanceName: { type: String, required: true },
  participantTypes: { type: [String], required: true },
  tickets: { type: [String], required: true },
  alloted: { type: Number, required: true },
  checkin: { type: Number, required: true },
  pending: { type: Number, required: true }
});

const Instance = mongoose.model("Instance", instanceSchema);

module.exports = Instance;
