const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  features: { type: [String], required: true },
  notes: { type: String },
  referenceMaterial: { type: String },
});

module.exports = mongoose.model('Program', programSchema);