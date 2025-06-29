const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post('/book', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).send("Appointment booked");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/all', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.send(appointments);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;