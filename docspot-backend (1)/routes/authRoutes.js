const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send("User registered");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) res.send(user);
    else res.status(404).send("Invalid credentials");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;