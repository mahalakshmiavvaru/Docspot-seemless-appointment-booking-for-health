const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorInfo: Object,
  userInfo: Object,
  date: String,
  document: String,
  status: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);