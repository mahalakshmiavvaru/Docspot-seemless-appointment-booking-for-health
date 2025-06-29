const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

router.post('/register', async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).send("Doctor registered");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/list', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.send(doctors);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;