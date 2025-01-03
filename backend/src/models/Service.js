const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  technician: { type: mongoose.Schema.Types.ObjectId, ref: 'Technician', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);