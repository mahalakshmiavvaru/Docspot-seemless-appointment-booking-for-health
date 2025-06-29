const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  userId: String,
  fullName: String,
  email: String,
  timings: String,
  phone: String,
  address: String,
  specialization: String,
  status: String,
  experience: String,
  fees: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);