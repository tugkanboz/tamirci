const mongoose = require('mongoose');

const TechnicianSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Technician', TechnicianSchema);